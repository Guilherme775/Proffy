import React, { useState, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";

import { Container, Form, InputBlock } from "./styles";

import TeacherItem, { Teacher } from "../../components/TeacherItem";

import { FiSearch } from "react-icons/fi";
import api from "../../services/api";

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  const [teachers, setTeachers] = useState([]);

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get("/classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(response.data);
  }
  return (
    <Container>
      <PageHeader title="Estes são os Proffys disponíveis">
        <Form>
          <form onSubmit={searchTeachers}>
            <InputBlock id="input-block">
              <label htmlFor="subject">Matérias</label>
              <select
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <option value="" disabled hidden>
                  Selecione uma opção
                </option>
                <option value="Matemática">Matemática</option>
                <option value="História">História</option>
                <option value="Física">Física</option>
                <option value="Química">Química</option>
                <option value="Biologia">Biologia</option>
                <option value="Ciências">Ciências</option>
                <option value="Geografia">Geografia</option>
                <option value="Educação física">Educação física</option>
                <option value="Português">Português</option>
              </select>
            </InputBlock>

            <InputBlock id="input-block">
              <label htmlFor="week-day">Dia da semana</label>
              <select
                id="week-day"
                value={week_day}
                onChange={(e) => setWeekDay(e.target.value)}
              >
                <option value="" disabled hidden>
                  Selecione uma opção
                </option>
                <option value="0">Domingo</option>
                <option value="1">Segunda-feira</option>
                <option value="2">Terça-feira</option>
                <option value="3">Quarta-feira</option>
                <option value="4">Quinta-feira</option>
                <option value="5">Sexta-feira</option>
                <option value="6">Sábado</option>
              </select>
            </InputBlock>

            <InputBlock id="input-block">
              <label htmlFor="time">Hora</label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </InputBlock>

            <button type="submit">
              <FiSearch />
              Buscar
            </button>
          </form>
        </Form>
      </PageHeader>

      {teachers.map((teacher: Teacher) => {
        return <TeacherItem key={teacher.id} teacher={teacher} />;
      })}
    </Container>
  );
};

export default TeacherList;
