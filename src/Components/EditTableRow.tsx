import React from 'react';
import { Backspace } from 'react-bootstrap-icons';
import { InputGroup, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';

export function EditTableRow (props: any) {
	return (
		<tr>
			<td>
				<InputGroup className='mb-3'>
					<Form.Control
						onChange={props.handleEditFormChange}
						value={props.editFormData.name}
						type='text'
						placeholder='Project name'
						name='name'
						required
					/>
				</InputGroup>
			</td>
			<td>
				<InputGroup className='mb-3'>
					<Form.Control
					onChange={props.handleEditFormChange}
					value={props.editFormData.current_amount}
					type='number'
					placeholder='Current Amount'
					name='current_amount'
					required
					/>
				</InputGroup>
			</td>
			<td>
				<InputGroup className='mb-3'>
					<Form.Control
					onChange={props.handleEditFormChange}
					value={props.editFormData.amount_needed}
					type='number'
					placeholder='Amount needed'
					name='amount_needed'
					required
					/>
				</InputGroup>
			</td>
			<td>
				<InputGroup className='mb-3'>
					<Form.Control
					onChange={props.handleEditFormChange}
					value={props.editFormData.term}
					type='months'
					placeholder='Term(month)'
					name='term'
					required
					/>
				</InputGroup>
			</td>
			<td>
				<InputGroup className='mb-3'>
					<Form.Control
					onChange={props.handleEditFormChange}
					value={props.editFormData.interest}
					type='number'
					placeholder='Interest'
					name='interest'
					required
					/>
				</InputGroup>
			</td>
			<td>
				<button className={'button-special'} type="submit">Save</button>
			</td>
			<td>
				<OverlayTrigger overlay={<Tooltip id="cancel">cancel</Tooltip>}>
					<Backspace type='button' onClick={props.handleCancelClick} />
				</OverlayTrigger>
			</td>
		</tr>
	);
}