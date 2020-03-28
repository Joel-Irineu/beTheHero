import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import api from    '../../services/api';

import './styles.css';

import logoImage from '../../assets/logo.svg';
import ArrowLeft from '../../assets/arrow-left.svg';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

       try {
            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/');
        }catch(err){
            alert('erro no cadastro, tente novamente!');
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero" />

                    <h1>Cadasto</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos da sua ONG</p>
                
                    <Link className="back-link" to="/">
                        <img src={ArrowLeft} alt="login" width="16" />
                        Não tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)} 
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder="UF" 
                            style={{width: 80}}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}