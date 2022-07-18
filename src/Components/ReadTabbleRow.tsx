import React from 'react';
import { Screwdriver, Trash } from 'react-bootstrap-icons';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export function ReadTableRow(project: any) {
	return <tr key={project.project.id}>
		<td>{project.project.name}</td>
		<td>{project.project.current_amount}eur</td>
		<td>{project.project.amount_needed}eur</td>
		<td>{project.project.term}month</td>
		<td>{project.project.interest}</td>
		<td>
			<OverlayTrigger overlay={<Tooltip id='edit'>edit</Tooltip>}>
				<Screwdriver type='button' onClick={(event) => project.handleEditClick(event, project.project)}/>
			</OverlayTrigger>
		</td>
		<td>
			<OverlayTrigger overlay={<Tooltip id='delete'>delete</Tooltip>}>
				<Trash type='button' onClick={() => project.handleDeleteClick(project.project.id)}/>
			</OverlayTrigger>
		</td>
	</tr>
}