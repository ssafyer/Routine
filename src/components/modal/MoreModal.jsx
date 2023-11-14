import ALARM from '../../assets/images/Alarm'
import ALARM_OFF from '../../assets/images/AlarmOff.svg'
import PASS_OFF from '../../assets/images/PassOff.svg'
import PASS_ON from '../../assets/images/PassOn.svg'
import COPY from '../../assets/images/Copy.svg'
import DELETE from '../../assets/images/Delete.svg'
import SETTING2 from '../../assets/images/Setting2.svg'

const MORE_MODAL_CONTENTS = [
	{
		value: 'setting',
		icon: SETTING2,
		name: '설정',
	},
	{
		value: 'copy',
		icon: COPY,
		name: '복사',
	},
	{
		value: 'delete',
		icon: DELETE,
		name: '삭제',
	},
]

const DAY_SELECT = ['오늘', '전체'];

const ALARM_FREQUENCY = [
	'한번만 알림',
	'3분 후 다시 알림',
	'5분 후 다시 알림',
	'10분 후 다시 알림',
];


const MoreModal = ({ id, pass, alarm, closeModal, choice }) => {
	return (
		<>
			<div className='MoreModal'>
				{MORE_MODAL_CONTENTS.map((content, i) => (
					<div className='flexBetween MoreModal__inner'
						onClick={() => choice(id, content.value)}
						key={i}
					>
						<img src={content.icon} alt="icon" />
						<p className='MoreModal__text'>
							{content.name}
						</p>
					</div>
				))}
				<div className='flexBetween MoreModal__inner'
					onClick={() => {
						if (pass) {
							choice(id, 'passOff');
						} else {
							choice(id, 'passOn');
						}
					}}
				>
					<img src={pass ? PASS_OFF : PASS_ON} alt="icon" />
					<p
						style={{ marginLeft: '24px', flexGrow: 1, textAlign: 'center' }}
					>
						{pass ? '패스 해제' : '오늘 패스'}
					</p>
				</div>
				<div className='flexBetween MoreModal__inner'
					onClick={() => {
						if (alarm) {
							choice(id, 'alarmOff');
						} else {
							choice(id, 'alarmOn');
						}
					}}
				>
					{alarm ? <img src={ALARM_OFF} alt="icon" /> : <ALARM />}
					<p>
						{alarm ? '알림 끄기' : '알림 켜기'}
					</p>
				</div>
			</div>
				<div className='MoreModal__bg' onClick={closeModal} />
		</>
	);
};

export default MoreModal;
