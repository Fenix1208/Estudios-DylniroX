import React from "react";
import "./Maya.css";

const Maya = () => {
  return (
    <div className="maya-container">
      <div className="div-maya-info">
        <div className="maya-sec-1">
            <p className="maya-title">Maya</p>
            <p className="maya-subtitle">Nuestro ChatBot con IA</p>
            <p className="maya-description">
                Maya es un asistente virtual diseñado para ayudarte a resolver tus dudas sobre el uso de la plataforma.
                <br /> <br />
                Actualmente está en fase de entrenamiento, lo que significa que está aprendiendo a responder a tus preguntas de manera más efectiva.
                <br /> <br />
                Si tienes alguna pregunta, no dudes en hacerla. Maya está aquí para ayudarte y mejorar con cada interacción.
            </p>
        </div>
        <div className="maya-sec-2">
            <p className="maya-info">
                <strong>Nota:</strong> Maya está en constante aprendizaje y mejora. Si no puede responder a tu pregunta, por favor intenta de nuevo más tarde.
                <strong> Power By:</strong> Copilot Agents
            </p>
        </div>
      </div>

      <div className="div-bot-copilot">
        <div className="bot-title">
            <h2>En entrenamiento</h2>
            <p>Maya está aprendiendo a responder tus preguntas</p>
        </div>
        <iframe
          className="iframe-bot"
          title="Bot de Ayuda"
          src="https://copilotstudio.microsoft.com/environments/Default-2774b2ee-991d-4bed-8a42-c4825b0b8f74/bots/crc5a_maya/webchat?__version__=2"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Maya;
