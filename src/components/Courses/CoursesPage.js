import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';

const CoursePage = () => {
    const courses = useSelector(state => state.courses)
    const dispatch = useDispatch();
    const [course, setCourse] = useState({ title: "" })

    const handleInput = event => {
        console.log({ title: event.target.value })
        return setCourse({ ...course, title: event.target.value });
    }
    const handleSubmit = event => {
        event.preventDefault();
        dispatch(courseActions.createCourse(course))
    }

    return (
        <>
            <form className="container-sm" onSubmit={handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-8 col-lg-8">
                        <input type="text" className="form-control" onChange={handleInput} value={course.title} />
                    </div>
                    <div className="col-1 col-lg-4">
                        <input type="submit" className="btn btn-primary" value="Save" />
                    </div>
                </div>
                {courses.map(course=>(
                    <div key={course.title}>{course.title}</div>
                ))}
            </form>
        </>
    );
}


export default CoursePage;