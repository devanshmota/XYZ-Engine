import React from 'react'
import styles from './Results.module.css'
import { useSelector } from 'react-redux'
import html2pdf from 'html2pdf.js';

const Results = () => {

    let { form } = useSelector((state) => state.project)
    let { maxX, minX, maxY, minY, maxZ, minZ } = useSelector((state) => state.minmax);

    const downloadAsPDF = () => {
        const element = document.getElementById('table_container');
        html2pdf().from(element).save();
    };

    return (
        <>
            <div className={styles.container} >
                <div className={styles.table_container} id='table_container'>
                    <table className={styles.table}>
                        <tbody>
                            <tr>
                                <th>Project Name</th>
                                <td>{form.projectName}</td>
                            </tr>
                            <tr>
                                <th>Project Description</th>
                                <td>{form.projectDesc}</td>
                            </tr>
                            <tr>
                                <th>Client</th>
                                <td>{form.client}</td>
                            </tr>
                            <tr>
                                <th>Contractor</th>
                                <td>{form.contractor}</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className={styles.table}>
                        <tbody>
                            <tr>
                                <th>Max X</th>
                                <td>{maxX}</td>
                            </tr>
                            <tr>
                                <th>Min X</th>
                                <td>{minX}</td>
                            </tr>
                            <tr>
                                <th>Max Y</th>
                                <td>{maxY}</td>
                            </tr>
                            <tr>
                                <th>Min Y</th>
                                <td>{minY}</td>
                            </tr>
                            <tr>
                                <th>Max Z</th>
                                <td>{maxZ}</td>
                            </tr>
                            <tr>
                                <th>Min Z</th>
                                <td>{minZ}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={styles.btn_div}>
                    <button className={styles.btn} onClick={downloadAsPDF}>Download</button>
                </div>
            </div>
        </>
    )
}

export default Results