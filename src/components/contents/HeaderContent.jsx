import { FlexDiv } from 'components/div/Div';
import { LOGO } from 'assets/images';
import { Image } from 'components/img';
import { Button } from 'components/button';
import { TutorialButtonStyle } from 'constants/button';
import { Select } from 'components/select';
import { DAY_SELECT } from 'constants/contents';

const HeaderContent = ({ selected, setSelected }) => {
	return (
		<FlexDiv style={{ height: '32px', marginBottom: '24px', justifyContent: 'space-between' }}>
			<Image src={LOGO} />
			<FlexDiv style={{ height: '100%' }}>
				<Button
					theme={TutorialButtonStyle}
					text="튜토리얼"
					onClick={() => console.log('튜토리얼')}
					style={{ marginRight: '24px' }}
				/>
				<Select options={DAY_SELECT} selected={selected} changeSelect={setSelected} shape={true} />
			</FlexDiv>
		</FlexDiv>
	);
};
export default HeaderContent;
