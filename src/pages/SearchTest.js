import NavBar from 'components/navigation/NavBar';
import imgEdit1 from '../assets/images/img_edit1.png'
import imgEdit2 from '../assets/images/img_edit2.png'
import imgEdit3 from '../assets/images/img_edit3.png'
import { useRef, useState } from 'react';

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


function SearchTest() {
	const [categoryChoice, setCategoryChoice] = useState(0);

    const categoryRef = useRef(null); // Ref for horizontal dragging
    const actionListRef = useRef(null); // Ref for vertical dragging

    // States for horizontal dragging
    const [isDraggingH, setIsDraggingH] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // States for vertical dragging
    const [isDraggingV, setIsDraggingV] = useState(false);
    const [startY, setStartY] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    // Horizontal Dragging
    const startDraggingH = (e) => {
        setIsDraggingH(true);
        setStartX(e.pageX - categoryRef.current.offsetLeft);
        setScrollLeft(categoryRef.current.scrollLeft);
    };

    const onDragH = (e) => {
        if (!isDraggingH) return;
        e.preventDefault();
        const x = e.pageX - categoryRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        categoryRef.current.scrollLeft = scrollLeft - walk;
    };

    // Vertical Dragging
    const startDraggingV = (e) => {
        setIsDraggingV(true);
        setStartY(e.pageY - actionListRef.current.offsetTop);
        setScrollTop(actionListRef.current.scrollTop);
    };

    const onDragV = (e) => {
        if (!isDraggingV) return;
        e.preventDefault();
        const y = e.pageY - actionListRef.current.offsetTop;
        const walk = (y - startY) * 2;
        actionListRef.current.scrollTop = scrollTop - walk;
    };

    const stopDragging = () => {
        setIsDraggingH(false);
        setIsDraggingV(false);
    };



	return (
        <section className="page__search">
			<h2>탐색하기</h2>
			<h3>
				<b>왈라왈</b>
				<span>님을 위한 추천 리스트</span>
			</h3>

			<div className="action__category"
                style={{overflow:'hidden'}}
                ref={categoryRef}
                onMouseDown={startDraggingH}
                onMouseLeave={stopDragging}
                onMouseUp={stopDragging}
                onMouseMove={onDragH}
            >
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

			<div className="action__list"
                style={{overflow:'hidden'}}
                ref={actionListRef}
                onMouseDown={startDraggingV}
                onMouseLeave={stopDragging}
                onMouseUp={stopDragging}
                onMouseMove={onDragV}
            >
				{
					actionlistData.map((item, index) =>
						<button key={index}>
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

export default SearchTest;
