import data from '../data/projects.json'
import React, { Fragment, MouseEventHandler, useCallback, useState } from 'react';
import { Card, Table } from 'react-bootstrap';
import './Style/home.css';
import Button from 'react-bootstrap/Button';
import ProjectModal from '../Components/ProjectModal';
import { nanoid } from 'nanoid';
import Form from 'react-bootstrap/Form';
import { EditTableRow } from '../Components/EditTableRow';
import { ReadTableRow } from '../Components/ReadTabbleRow';

type Data = typeof data;
type SortKeys = keyof Data[0];
type SortOrder = 'asc' | 'desc';

export function Home()
{
	const [projects, setProjects] = useState(data);
	const [modalShow, setModalShow] = useState(false);

	const [formData, setFormData] = useState({
		name: '',
		current_amount: '',
		amount_needed: '',
		term: '',
		interest: ''
	})

	const [editFormData, setEditFormData] = useState({
		name: '',
		current_amount: '',
		amount_needed: '',
		term: '',
		interest: ''
	})

	const [editProjectId, setEditProjectId] = useState(null);

	const handleAddFormChange = (event: any) => {
		event.preventDefault();

		const fieldName = event.target.getAttribute('name');
		const fieldValue = event.target.value;
		const newFormData = { ...formData };
		// @ts-ignore
		newFormData[fieldName]= fieldValue;

		setFormData(newFormData);
	}

	const handleEditFormChange = (event: any) => {
		event.preventDefault();

		const fieldName = event.target.getAttribute('name');
		const fieldValue = event.target.value;

		const newFormData = { ...editFormData };
		// @ts-ignore
		newFormData[fieldName] = fieldValue;
		setEditFormData(newFormData);
	};

	const handleAddFormSubmit = (event: any) => {
		event.preventDefault();
		const newProject = {
			id: nanoid(),
			name: formData.name,
			current_amount: formData.current_amount,
			amount_needed: formData.amount_needed,
			term: formData.term,
			interest: formData.interest
		}

		const newProjects = [...projects, newProject];
		// @ts-ignore
		setProjects(newProjects);
	}

	const handleEditFormSubmit = (event: any) => {
		event.preventDefault();
		const editedProject = {
			id: editProjectId,
			name: editFormData.name,
			current_amount: editFormData.current_amount,
			amount_needed: editFormData.amount_needed,
			term: editFormData.term,
			interest: editFormData.interest
		};

		const newProjects = [...projects];

		const index = projects.findIndex((project) => project.id === editProjectId);

		// @ts-ignore
		newProjects[index] = editedProject;
		setProjects(newProjects);
		setEditProjectId(null);
	};

	const handleEditClick = (event: any, project: any) => {
		event.preventDefault();
		setEditProjectId(project.id);

		const formValues = {
			name: project.name,
			current_amount: project.current_amount,
			amount_needed: project.amount_needed,
			term: project.term,
			interest: project.interest
		};

		setEditFormData(formValues);
	};

	const handleCancelClick = () => {
		setEditProjectId(null);
	};

	const handleDeleteClick = (projectId: any) => {

		const newProjects = [...projects];
		const index = projects.findIndex((project) => project.id === projectId);

		newProjects.splice(index, 1);

		// @ts-ignore
		setProjects(newProjects)
	};

	function sortData({tableData, sortKey, reverse}: {
		tableData: Data;
		sortKey: SortKeys;
		reverse: boolean;
	}) {
		if (!sortKey) return tableData;

		const sortedData = projects.sort((a, b) => {
			return a[sortKey] > b[sortKey] ? 1 : -1;
		});

		if (reverse) {
			return sortedData.reverse();
		}

		return sortedData;
	}

	function SortButton({ sortOrder, columnKey, sortKey, onClick}: {
		sortOrder: SortOrder;
		columnKey: SortKeys;
		sortKey: SortKeys;
		onClick: MouseEventHandler<HTMLButtonElement>;
	}) {
		return (
			<button
				onClick={onClick}
				className={`${
					sortKey === columnKey && sortOrder === 'desc'
						? 'sort-button sort-reverse'
						: 'sort-button'
				}`}
			>▲</button>
		);
	}

	const [sortKey, setSortKey] = useState<SortKeys>('id');
	const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

	const headers : { key: SortKeys; label: string }[] = [
		{key: 'name', label: 'Name'},
		{key: 'current_amount', label: 'Current amount(Eur)'},
		{key: 'amount_needed', label: 'Amount needed(Eur)'},
		{key: 'term', label: 'Term(month)'},
		{key: 'interest', label: 'Interest(%)'},
	];

	const sortedData = useCallback(
		() => sortData({ tableData: projects, sortKey, reverse: sortOrder === 'desc' }),
		[projects, sortKey, sortOrder]
	);

	function changeSort(key: SortKeys) {
		setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');

		setSortKey(key);
	}

	const buttonCreate = () => {
		return(
			<Button className={'button-special'} variant='outline-primary' onClick={() => setModalShow(true)}>
				New project
			</Button>
		)
	}

	return (
		<>
			<h3>Projects {buttonCreate()}</h3>
			<Card className={'border'}>
				<Form onSubmit={handleEditFormSubmit}>
					<Table hover>
					<thead>
					<tr>
						{headers.map((row) => {
							if (row.key === 'interest') {
								return <td className={'col_interest'} key={row.key}> {row.label} {' '}
									<SortButton
										columnKey={row.key}
										onClick={() => changeSort(row.key)}
										{...{
											sortOrder,
											sortKey,
										}}
									/>
								</td>;
							} else {
								return <td key={row.key}> {row.label} </td>
							}
						})}
						<td></td>
						<td></td>
					</tr>
					</thead>
					<tbody>
					{sortedData().map((projects) => {
						return <Fragment>
							{ editProjectId === projects.id ? (
								<EditTableRow
									editFormData={editFormData}
									handleEditFormChange={handleEditFormChange}
									handleCancelClick={handleCancelClick}
								/>
							) : (
							<ReadTableRow
								project ={projects}
								handleEditClick={handleEditClick}
								handleDeleteClick={handleDeleteClick}
							/>
							)}
						</Fragment>
					})}
					</tbody>
				</Table>
				</Form>
			</Card>
			<ProjectModal
				formData={formData}
				handleAddFormChange={handleAddFormChange}
				handleAddFormSubmit={handleAddFormSubmit}
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</>
	)
}