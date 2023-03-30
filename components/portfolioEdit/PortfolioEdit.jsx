import styles from "./PortfolioEdit.module.scss";
import { app, database } from "../../firebase/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
const ReactQuill = dynamic(import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css';
import {useEffect, useState} from "react";
import dynamic from "next/dynamic";
const PortfolioEdit = () => {
    const dbInstance = collection(database, "portfolios");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [portfolios, setPortfolios] = useState([]);

    const getPortfolios = () => {
        getDocs(dbInstance).then(data => data.docs.map(item => setPortfolios(prev => [...prev, {...item.data(), id: item.id}])));
    }

    useEffect(() => {
        getPortfolios();
    }, []);


    const addTitle = (e) => {
        setTitle(e.target.value);
    }
    const addDesc = value =>{
        setDescription(value)
    }
    const savePortfolio = () =>{

        addDoc(dbInstance, {
            title,
            description,
        }).then(() =>{
            setTitle("");
            setDescription("")
        })
    }
    return (
        <div>
            <button>Создать новую портфолио</button>

            <input
                type="text"
                value={title}
                onChange={addTitle}
                placeholder="Введите названия"
            />
            <ReactQuill
                theme="snow"
                value={description}
                onChange={addDesc} />

            <button
                onClick={savePortfolio}
            >Сохранить</button>

            <div>
                <h1>Portfolios</h1>
                <ul>
                    {
                        portfolios.map((item, i) => (
                            <li key={i}>
                                <h3>Title: {item.title}</h3>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                
            </div>


        </div>
    );
};

export default PortfolioEdit;
