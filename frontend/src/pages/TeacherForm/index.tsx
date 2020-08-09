import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import { Container, Card, InputBlock, ScheduleItem } from "./styles";
import PageHeader from "../../components/PageHeader";

import warningIcon from "../../assets/images/icons/warning.svg";
import api from "../../services/api";

import swal from "sweetalert";

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api
      .post("/classes", {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        swal("Bom trabalho!", "Aulas cadastradas com sucesso!", "success");

        history.push("/");
      })
      .catch(() => {
        swal("Ops!", "Algo deu errado", "error");
      });
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  return (
    <Container>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <Card>
        <main>
          <form onSubmit={handleCreateClass}>
            <fieldset>
              <legend>Seus dados</legend>

              <InputBlock id="input-block">
                <label htmlFor="name">Nome completo</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </InputBlock>

              <InputBlock id="input-block">
                <label htmlFor="avatar">Avatar (URL)</label>
                <input
                  type="text"
                  id="avatar"
                  value={avatar}
                  onChange={(e) => {
                    setAvatar(e.target.value);
                  }}
                />
              </InputBlock>

              <InputBlock id="input-block">
                <label htmlFor="whatsapp">Whatsapp</label>
                <input
                  type="text"
                  id="whatsapp"
                  value={whatsapp}
                  onChange={(e) => {
                    setWhatsapp(e.target.value);
                  }}
                />
              </InputBlock>

              <InputBlock id="input-block">
                <label htmlFor="bio">Biografia</label>
                <textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => {
                    setBio(e.target.value);
                  }}
                />
              </InputBlock>
            </fieldset>

            <fieldset>
              <legend>Sobre a aula</legend>

              <InputBlock id="input-block">
                <label htmlFor="subject">Matéria</label>
                <select
                  id="subject"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
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
                <label htmlFor="cost">Custo da sua hora/aula</label>
                <input
                  type="number"
                  id="cost"
                  value={cost}
                  onChange={(e) => {
                    setCost(e.target.value);
                  }}
                />
              </InputBlock>
            </fieldset>

            <fieldset>
              <legend>
                Horários disponíveis
                <button type="button" onClick={addNewScheduleItem}>
                  + Novo horário
                </button>
              </legend>

              {scheduleItems.map((scheduleItem, index) => {
                return (
                  <ScheduleItem key={scheduleItem.week_day}>
                    <InputBlock id="input-block">
                      <label htmlFor="week-day">Dia da semana</label>
                      <select
                        id="week-day"
                        value={scheduleItem.week_day}
                        onChange={(e) =>
                          setScheduleItemValue(
                            index,
                            "week_day",
                            e.target.value
                          )
                        }
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
                      <label htmlFor="from">Das</label>
                      <input
                        type="time"
                        id="from"
                        value={scheduleItem.from}
                        onChange={(e) =>
                          setScheduleItemValue(index, "from", e.target.value)
                        }
                      />
                    </InputBlock>

                    <InputBlock id="input-block">
                      <label htmlFor="to">Até</label>
                      <input
                        type="time"
                        id="to"
                        value={scheduleItem.to}
                        onChange={(e) =>
                          setScheduleItemValue(index, "to", e.target.value)
                        }
                      />
                    </InputBlock>
                  </ScheduleItem>
                );
              })}
            </fieldset>

            <footer>
              <p>
                <img src={warningIcon} alt="Aviso importante" />
                Importante! <br />
                Preencha todos os dados
              </p>
              <button type="submit">Salvar cadastro</button>
            </footer>
          </form>
        </main>
      </Card>
    </Container>
  );
};

export default TeacherForm;
