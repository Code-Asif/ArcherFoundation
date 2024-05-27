import React from 'react';
import Img1 from '../Assets/it.jpg';
import Img2 from '../Assets/language.jpeg';
import Img3 from '../Assets/soft_skills.jpg';

const Program = () => {
    return (
        <div className='Program'>
            <h1 style={{paddingTop: "1rem"}}>Programs Offered by Archer Foundation</h1>
            <table className='ProgramTable'>
                <tr>
                    <td rowSpan={2}><img className='ProgramImg' src={Img1} alt='CS'></img></td>
                    <td>BS-CIT: Bihar State Certificate in Information Technology</td>
                </tr>
                <tr>
                    <td>Outcome: Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet quisquam magnam fugit, necessitatibus veritatis dolores placeat cumque perspiciatis libero nesciunt officiis inventore in asperiores dolorum omnis magni optio corporis. Quia, maiores expedita. A, quos molestias recusandae natus, quo in quia numquam sapiente quis magni, iure optio nemo. Aperiam, a?</td>
                </tr>
            </table>
            <br />
            <table className='ProgramTable'>
                <tr>
                    <td rowSpan={2}><img className='ProgramImg' src={Img2} alt='CS'></img></td>
                    <td>BS-CCS: Bihar State Certificate in Communication Skills</td>
                </tr>
                <tr>
                    <td>Outcome: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ea, sequi cupiditate ullam placeat error fuga repellendus earum, excepturi a, inventore reiciendis tempora itaque! Odit qui iure doloribus nostrum, eos saepe architecto consequatur voluptates natus corporis, fugit molestias magni ratione tempora sed minus quaerat ad? Delectus voluptas perferendis explicabo soluta.</td>
                </tr>
            </table>
            <br />
            <table className='ProgramTable'>
                <tr>
                    <td rowSpan={2}><img className='ProgramImg' src={Img3} alt='CS'></img></td>
                    <td>BS-CSS: Bihar State Certificate in Soft Skills</td>
                </tr>
                <tr>
                    <td>Outcome: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eius nesciunt vero minima, magnam reprehenderit illo neque. Rerum aut debitis voluptatem labore dolorum atque quo aspernatur nulla quas cumque ipsam hic, accusantium nobis, eveniet accusamus molestiae quia enim deserunt minima ratione reiciendis. Blanditiis aliquid in, illum atque quae quod impedit.</td>
                </tr>
            </table>

        </div>
    );
}
export default Program;