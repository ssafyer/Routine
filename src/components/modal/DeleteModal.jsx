
const DeleteModal = ({ id, closeModal, deleteRoutine }) => {
	return (
		<>
			<div className='DeleteModal__bg' onClick={closeModal} />
			<div className='DeleteModal'>
				<h2>루틴을 삭제하시겠습니까?</h2>
				<p className='DeleteModal__subtext'>
					한번 삭제된 루틴은 복구할 수 없습니다.
				</p>
				<div className='flexBetween btnbox'>
					<p className='btn__cancel' onClick={closeModal}>
						취소하기
					</p>
					<p className='btn__delete' onClick={() => deleteRoutine(id)}>
						삭제하기
					</p>
				</div>
			</div>
		</>
	);
};

export default DeleteModal;
