import React from 'react'

import PageHeader from '../../components/PageHeader/index'
import TeacherItem from '../../components/TeacherItem/index'

import './styles.css'


function TeacherList() {
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes sao os proffys desponiveis">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Materia</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}



export default TeacherList