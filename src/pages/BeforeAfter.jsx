import React from 'react'
import ImageHolder from '../components/ImageHolder';
import styles from './BeforeAfter.module.css'

export default function BeforeAfter() {
    const imageUrl = [{
		"img1": "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/crowns-bonding-before-village-dental.jpeg", "img2": "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/crowns-bonding-after-village-dental.jpeg", "title": `Crowns &
	Bonding`},
	{
		"img1": "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/implants-invisalign-before-village-dental.jpeg.jpeg", "img2": "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/implants-invisalign-after-village-dental.jpeg", "title": `Dental Implants &
	Invisalign`},
	{
		"img1": "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/crown-lengthening-before-village-dental.jpeg", "img2": "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/crown-lengthening-after-village-dental.jpeg", "title": `Crown
	Lengthening`},
	{
		"img1": "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/teeth-in-a-day-before-village-dental.jpeg", "img2": "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/teeth-in-a-day-after-village-dental.jpeg", "title": `Teeth in a Day
	(replacing a bridge with implants)
	`},
	{
		"img1": "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/implants-front-before-village-dental.jpeg", "img2": "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/implants-front-after-village-dental.jpeg", "title": `Dental Implants
	(replacing front teeth)
	`},
	{
		"img1": "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/full-mouth-rehab-before-village-dental.jpeg", "img2": "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/full-mouth-rehab-after-village-dental.jpeg", "title": `Full Mouth
	Rehabilitation`},
	{
		"img1": "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/implant-and-crown-lengthening-before-village-dental.jpeg", "img2": "https://www.villagedentaldtc.com/wp-content/uploads/2021/12/implant-and-crown-lengthening-after-village-dental.jpeg", "title": `Dental Implant &
	Crown Lengthening`},
	];
  return (
    <div style={{ margin: "25px 0" }}>
				<h1 className={styles.imagehead}>Before/After</h1>
				<div className={styles.imagegrid}>
					{
						imageUrl.map(({ title, img1, img2 }) => {
							return <ImageHolder title={title} img1={img1} img2={img2} />
						})
					}
				</div>

			</div>
  )
}
