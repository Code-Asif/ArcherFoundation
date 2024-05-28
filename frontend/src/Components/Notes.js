import React from 'react';

const Notes = () => {
    return (
        <div className='Notes'>
            <h1>Student Notes</h1>
            <p>Here you can find all the notes for the courses you are enrolled in.</p>
            <p>Click on the course to view the notes.</p>
            <div className='Notes-List'>
                <h2>Course 1</h2>
                <ul>
                    <li>Notes 1</li>
                    <li>Notes 2</li>
                    <li>Notes 3</li>
                    <li>Notes 4</li>
                </ul>

                <h2>Course 2</h2>
                <ul>
                    <li>Notes 1</li>
                    <li>Notes 2</li>
                    <li>Notes 3</li>
                    <li>Notes 4</li>
                </ul>

                <h2>Course 3</h2>
                <ul>
                    <li>Notes 1</li>
                    <li>Notes 2</li>
                    <li>Notes 3</li>
                    <li>Notes 4</li>
                </ul>
                </div>
        </div>
    );
}

export default Notes;