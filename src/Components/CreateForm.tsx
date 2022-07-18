import Form from 'react-bootstrap/Form';
import React from 'react';

export function CreateForm(props: any )
{
	return (
		<>
			<Form onSubmit={props.handleAddFormSubmit}>
				<Form.Group className='mb-3'>
					<Form.Control
						onChange={props.handleAddFormChange}
						value={props.editFormData?.name ? props.editFormData.name : props.name}
						type='text'
						placeholder='Project name'
						name='name'
						required
					/>
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Control
						onChange={props.handleAddFormChange}
						value={props.editFormData?.current_amount ? props.editFormData.current_amount : props.current_amount}
						type='number'
						placeholder='Current Amount(eur)'
						name='current_amount'
						required
					/>
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Control
						onChange={props.handleAddFormChange}
						value={props.editFormData?.amount_needed ? props.editFormData.amount_needed : props.amount_needed}
						type='number'
						placeholder='Amount needed(eur)'
						name='amount_needed'
						required
					/>
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Control
						onChange={props.handleAddFormChange}
						value={props.editFormData?.term ? props.editFormData.term : props.term}
						type='months'
						placeholder='Term(month)'
						name='term'
						required
					/>
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Control
						onChange={props.handleAddFormChange}
						value={props.editFormData?.interest ? props.editFormData.interest : props.interest}
						type='number'
						placeholder='Interest(%)'
						name='interest'
						required
					/>
				</Form.Group>
				{props.saveButton}
			</Form>
		</>
	)
}