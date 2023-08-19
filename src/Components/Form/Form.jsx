import React, { useState } from 'react'
import styles from './Form.module.css'
import CSVReader from 'react-csv-reader';
import { useSelector, useDispatch } from 'react-redux';
import { setMaxX, setMinX, setMaxY, setMinY, setMaxZ, setMinZ } from '../../Data/minmaxSlice'
import { setForm } from '../../Data/projectSlice';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Form = () => {

    const [isTrue, setIsTrue] = useState(false);

    let { maxX, minX, maxY, minY, maxZ, minZ } = useSelector((state) => state.minmax);

    let { form } = useSelector((state) => state.project)

    const dispatch = useDispatch();


    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setForm({
            ...form,
            [name]: value
        }));
    };

    const handleStepTwo = (e) => {
        e.preventDefault();
        setIsTrue(true)
    }

    const handleFileLoaded = (data, fileInfo) => {

        let maxX = Number.NEGATIVE_INFINITY, minX = Number.POSITIVE_INFINITY, maxY = Number.NEGATIVE_INFINITY, minY = Number.POSITIVE_INFINITY, maxZ = Number.NEGATIVE_INFINITY, minZ = Number.POSITIVE_INFINITY;

        for (let i = 1; i < data.length; i++) {

            if (parseFloat(data[i][1]) > maxX) {
                maxX = parseFloat(data[i][1])
            }

            if (parseFloat(data[i][1]) < minX) {
                minX = parseFloat(data[i][1])
            }
            if (parseFloat(data[i][2]) > maxY) {
                maxY = parseFloat(data[i][2])
            }
            if (parseFloat(data[i][2]) < minY) {
                minY = parseFloat(data[i][2])
            }
            if (parseFloat(data[i][3]) > maxZ) {
                maxZ = parseFloat(data[i][3])
            }
            if (parseFloat(data[i][3]) < minZ) {
                minZ = parseFloat(data[i][3])
            }
        }
        dispatch(setMaxX(maxX))
        dispatch(setMinX(minX))
        dispatch(setMaxY(maxY))
        dispatch(setMinY(minY))
        dispatch(setMaxZ(maxZ))
        dispatch(setMinZ(minZ))
    }
    return (
        <>
            <div className={styles.container}>
                <h1>XYZ Engine</h1>
                <form className={styles.form} onSubmit={handleStepTwo}>

                    <h4 className={styles.step}>Step 1</h4>

                    <div>
                        <label htmlFor="projectName">Project Name</label>
                        <input type="text" name='projectName' onChange={handleChange} required disabled={isTrue} className={styles.input} />
                    </div>

                    <div>
                        <label htmlFor="projectDesc">Project Description</label>
                        <textarea name='projectDesc' onChange={handleChange} rows="3" required disabled={isTrue} className={styles.input}></textarea>
                    </div>

                    <div>
                        <label htmlFor="client">Client</label>
                        <input type="text" name='client' onChange={handleChange} required disabled={isTrue} className={styles.input} />
                    </div>

                    <div>
                        <label htmlFor="contractor">Contractor</label>
                        <input type="text" name='contractor' onChange={handleChange} className={styles.input} required disabled={isTrue} />
                    </div>

                    <div className={styles.btn_div}>
                        <button type='submit' className={styles.btn} style={isTrue ? { display: 'none' } : {}}>Step 2</button>
                    </div>
                </form>

                {isTrue && (
                    <>
                        <form action="/result.js" className={styles.form}>


                            <h4 className={styles.step}>Step 2</h4>
                            <CSVReader
                                onFileLoaded={handleFileLoaded}
                                accept=".csv"
                                className={styles.csv_input}
                            />

                            <div>
                                <label htmlFor="">Max X</label>
                                <input type="number" className={styles.input} name='maxX' value={maxX} onChange={(e) => dispatch(setMaxX(e.target.value))} />
                            </div>
                            <div>
                                <label htmlFor="">Min X</label>
                                <input type="number" className={styles.input} name='minX' value={minX} onChange={(e) => dispatch(setMinX(e.target.value))} />
                            </div>
                            <div>
                                <label htmlFor="">Max Y</label>
                                <input type="number" className={styles.input} name='maxY' value={maxY} onChange={(e) => dispatch(setMaxY(e.target.value))} />
                            </div>
                            <div>
                                <label htmlFor="">Min Y</label>
                                <input type="number" className={styles.input} name='minY' value={minY} onChange={(e) => dispatch(setMinY(e.target.value))} />
                            </div>
                            <div>
                                <label htmlFor="">Max Z</label>
                                <input type="number" className={styles.input} name='maxZ' value={maxZ} onChange={(e) => dispatch(setMaxZ(e.target.value))} />
                            </div>
                            <div>
                                <label htmlFor="">Min Z</label>
                                <input type="number" className={styles.input} name='minZ' value={minZ} onChange={(e) => dispatch(setMinZ(e.target.value))} />
                            </div>
                            <div className={styles.btn_div}>
                                <Link to="/result" className={styles.btn}>Results</Link>
                            </div>

                        </form>
                        <br />
                    </>
                )}

            </div>
        </>
    )
}
export default Form