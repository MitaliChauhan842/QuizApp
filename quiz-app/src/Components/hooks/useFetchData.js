import { useEffect, useState } from "react";
import { EMPTY_ARRAY } from "../constants/quiz.constants";

const useFetchData = () => {
    const [questions, setQuestions] = useState(EMPTY_ARRAY);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch('/data.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setQuestions(data.questions);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        questions,
        loading,
        error,
    };
};

export default useFetchData;
