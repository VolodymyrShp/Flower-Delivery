import { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
export const ReviewsList = ({ styles, data }) => {
	const [slide, setSlide] = useState(0)	
	const nexSlide = () =>{
		setSlide(slide === data.length - 1? 0 : slide + 1)
	}
	const pervSlide = () =>{
		setSlide(slide === 0? data.length - 1: slide - 1)
	}
	return (
		<div className={styles.reviews__slideList}>
			<BsChevronLeft className={styles.arrow_left} onClick={pervSlide}/>
			{data.map((itemList, index) => {
				return (
					<div key={index} className={slide === index? styles.reviews__slide : styles.reviews__slideHidden}>
						<p>{itemList.reviewsText}</p>
						<h6>– {itemList.name} </h6>
					</div>
				)
			})}
			<BsChevronRight className={styles.arrow_right} onClick={nexSlide}/>
			<span className={styles.indicators}>
				{data.map((_, index) =>{
					return <button key={index} onClick={()=> setSlide(index)} className={slide === index? styles.indicator : styles.indicatorInActive}></button>
				})}
			</span>
		</div>
	)
}
