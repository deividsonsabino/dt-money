import { useState } from "react";

import Modal from "react-modal";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps) {
  const [type, setType] = useState('deposit');  
  
  return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button 
          type="button"
          className="react-modal-close"
        >
          <img 
            src={closeImg} 
            alt="Fechar Modal" 
            onClick={onRequestClose}  
          />
        </button>

        <Container>
          <h2>Cadastrar transação</h2>
          <input placeholder="Título" />
          <input placeholder="Valor" type="text" />

          <TransactionTypeContainer>
            <RadioBox
              type="button"
              onClick={() => { setType("deposit") }}
              isActive={type === "deposit"}
              activeColor="green"
              >
                <img src={incomeImg} alt="entrada"/>
                <span>Entrada</span>
            </RadioBox>
            <RadioBox
              type="button"
              onClick={() => { setType("withdraw") }}
              isActive={type === "withdraw"}
              activeColor="red"
              >
                <img src={outcomeImg} alt="saída"/>
                <span>Entrada</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input placeholder="Categoria" />
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    )
}