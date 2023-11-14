import NavBar from 'components/navigation/NavBar';
import imgEdit1 from '../assets/images/img_edit1.png'
import imgEdit2 from '../assets/images/img_edit2.png'
import imgEdit3 from '../assets/images/img_edit3.png'
import { useState } from 'react';

const categoryData = [
    '전체',
    '아침',
    '저녁',
    '집중 시간',
    '건강',
    '건강',
    '건강',
    '건강',
]

const actionlistData = [
    {
        name:'행동이름',
        img:imgEdit1
    },
    {
        name:'행동이름',
        img:imgEdit2
    },
    {
        name:'행동이름',
        img:imgEdit3
    },
    {
        name:'행동이름',
        img:imgEdit1
    },
    {
        name:'행동이름',
        img:imgEdit1
    },
    {
        name:'행동이름',
        img:imgEdit1
    },
    {
        name:'행동이름',
        img:imgEdit2
    },
    {
        name:'행동이름',
        img:imgEdit3
    },
    {
        name:'행동이름',
        img:imgEdit1
    },
    {
        name:'행동이름',
        img:imgEdit1
    },
    {
        name:'행동이름',
        img:imgEdit3
    },
    {
        name:'행동이름',
        img:imgEdit1
    },
    {
        name:'행동이름',
        img:imgEdit1
    },
]


function Search() {
	const [categoryChoice, setCategoryChoice] = useState(0);

	return (
        <section className="page__search">
			<h2>탐색하기</h2>
			<h3>
				<b>왈라왈</b>
				<span>님을 위한 추천 리스트</span>
			</h3>

			<div className="action__category">
                        {
					categoryData.map((item, index) =>
						<label
							key={index}
							className={categoryChoice==index?'active':''}
							onClick={() => setCategoryChoice(index)}
						>
							<input type="radio" name="category" />
							{item}
						</label>
					)
				}
			</div>

			<div className="action__list ">
				{
					actionlistData.map((item, index) =>
						<button>
							<img src={item.img} alt="icon" />
							<span>{item.name}</span>
						</button>
					)
				}
			</div>
			<NavBar />
        </section>
    )
}

export default Search;
