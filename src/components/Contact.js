import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap'

function Contact() {
    const [boss, setBoss] = useState({})

    useEffect(() => {
        fetch('https://json-server-template-production.up.railway.app/staff')
            .then(r => r.json())
            .then(data => setBoss(data[0]))
    }, [])

    return (
        <div className='info'>
            <div style={{textAlign: 'center'}}>
            <h2>{boss.title}: {boss.name}</h2>
            </div>
            <br/>
            <Image roundedCircle src={boss.image} alt='profile-pic' id='profile-pic' />
            <p><strong>Github:</strong> <a href={boss.github}>{boss.github}</a></p>
            <p><strong>Blog:</strong> <a href={boss.blog}>{boss.blog}</a></p>
            <p>
                <strong>Bio:</strong>
                <br/>
                {boss.bio}
            </p>
            <br/>
            <span>Questions? <a href={`mailto:${boss.email}`}>Email</a> Naftali or connect with him on <a href={boss.linkedin} >LinkedIn</a></span>
        </div>
    )
}

export default Contact