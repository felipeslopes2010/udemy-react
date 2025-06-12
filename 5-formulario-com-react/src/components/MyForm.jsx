import { useState } from 'react'
import styles from './MyForm.module.css'

const MyForm = ({user}) => {
    /* Aula 6 - Controlled Inputs */
    /* Aula 3 - Gerenciamento de Dados */
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [bio, setBio] = useState(user?.bio || '');
    const [role, setRole] = useState(user?.role || '');

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({name: name, email: email, bio: bio, role: role})
        
        {/* Aula 7 - Limpando Form */}
        setName('');
        setEmail('');
        setBio('');
        setRole('');
    }

    return (
        <div>
        {/* Aula 1 - Criação de Form */}
        {/* Aula 5 - Envio de Form */}
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" value={name} onChange={handleName} />
            </div>
            {/* Aula 2 - Label envolvendo Input */}
            <label>
                <span>Email:</span>
                {/* Aula 4 - Alteração state Inline */}
                <input type="email" name="email" placeholder="Digite o seu email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            {/* Aula 8 - Input TextArea */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder="Descrição do usuário" value={bio} onChange={e => setBio(e.target.value)} />
            </label>
            {/* Aula 9 - Select */}
            <label>
                <span>Cargo:</span>
                <select name="role" value={role} onChange={e => setRole(e.target.value)}>
                    <option value="">Selecionar um cargo</option>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <button>Enviar</button>
        </form>
        </div>
    )
}

export { MyForm }

