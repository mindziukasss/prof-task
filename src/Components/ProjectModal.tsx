import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { CreateForm } from './CreateForm';

function ModalProject(props: any)
{
	const saveButton = () => {
		return (
			<>
				<div className={'text-center'}>
					<Button className={'mx-3 radius'} variant='outline-dark' onClick={props.onHide}>Close</Button>
					<Button type={'submit'} className={'button-special'} variant='outline-primary' onClick={props.onHide}>
						Save
					</Button>
				</div>
			</>
		);
	}

	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			<Modal.Body>
				<CreateForm
					formData={props.formData ? props.formData : props.editFormData}
					handleAddFormChange={props.handleAddFormChange}
					handleAddFormSubmit={props.handleAddFormSubmit}
					saveButton={saveButton()}
				/>
			</Modal.Body>
		</Modal>
	);
}

export default ModalProject;