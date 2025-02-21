import React, { useState, useRef } from 'react';
import Layout from './Layout';
import './vibe.css';
import './PaineldeDonates.css';

function PaineldeDonates() {
  const [isAudio, setIsAudio] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [recording, setRecording] = useState(false);
  const [timer, setTimer] = useState(20);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.ondataavailable = event => {
          audioChunksRef.current.push(event.data);
        };
        mediaRecorderRef.current.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
          const audioURL = URL.createObjectURL(audioBlob);
          setAudioURL(audioURL);
          audioChunksRef.current = [];
        };
        mediaRecorderRef.current.start();
        setRecording(true);
        setTimer(20);
        timerRef.current = setInterval(() => {
          setTimer(prevTimer => {
            if (prevTimer <= 1) {
              stopRecording();
              return 20;
            }
            return prevTimer - 1;
          });
        }, 1000);
      });
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    clearInterval(timerRef.current);
    setRecording(false);
  };

  const handleMessageClick = () => {
    setIsAudio(false);
    if (recording) {
      stopRecording();
    }
  };

  return (
    <Layout>
      <header className='vibe-header'>
        <div className='informacoes'>
          <i className="bi bi-person-circle icon-perfil"><p>Luiz</p></i>
        </div>
      </header>
      <h2 className='vibe-dash icon-perfil'>Painel de Donates</h2>
      <main className='vibe-main'>
        <div className='vibe-names'>
          <div className='cardzinho'>
            <div className="vibe-quantidades">
              <i className="bi bi-person-bounding-box icons"></i>
              <p className='usuario'>Dementador</p>
            </div>
          </div>
          <div className='cardzinho-2'>
            <div className="vibe-quantidades-2">
              <form className="chat-form">
                <input placeholder='Seu nick do chat' className='input-1' />
                {isAudio ? (
                  <div>
                    <audio controls className="audio-player" src={audioURL}></audio>
                    <p>{timer} segundos restantes</p> {/* Exibe o tempo restante */}
                    <div>
                      {recording ? (
                        <button type="button" className="stop-btn" onClick={stopRecording}>
                          <i className="bi bi-stop-fill"></i> Parar Gravação
                        </button>
                      ) : (
                        <button type="button" className="record-btn" onClick={startRecording}>
                          <i className="bi bi-mic-fill"></i> Iniciar Gravação
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  <textarea placeholder="Mensagem" className="textarea"></textarea>
                )}
                <div className='pf-funciona'>
                  <i className="bi bi-chat-left-dots icon-micro-2" onClick={handleMessageClick}></i>
                  <i className="bi bi-mic-fill icon-micro" onClick={() => setIsAudio(true)}></i>
                </div>
                <p className="char-limit">Restam 250 caracteres</p>
                <input placeholder='R$' className='input-1' />
                <p className="min-value">Valor mínimo: R$ 3,00</p>
                <label className="toggle-container">
                  <span>Escolher narrador por IA:</span>
                  <input type="checkbox" className="toggle-input" />
                  <span className="toggle-slider"></span>
                </label>
                <button type="submit" className="submit-btn">Continuar</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default PaineldeDonates;
