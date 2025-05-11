import React, { useState, useEffect } from 'react';
import styles from '../styles/HelloPage.module.css';

interface HelloPageProps {}

const HelloPage: React.FC<HelloPageProps> = () => {
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const backendUrl: string = 'http://localhost:8080/hello';

    useEffect(() => {
        const fetchGreeting = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(backendUrl);
                if (!response.ok) {
                    console.error(`HTTP error! status: ${response.status}`);
                    setError(`Failed to load greeting: HTTP status ${response.status}`);
                    setLoading(false);
                    return;
                }
                const data = await response.text();
                setMessage(data);
                setLoading(false);
            } catch (err: any) {
                console.error('Failed to fetch greeting:', err);
                setError(`Failed to load greeting: ${err.message}`);
                setLoading(false);
            }
        };

        fetchGreeting();
    }, [backendUrl]);

    return (
        <div className={styles.helloPageContainer}> 
            <h1 className={styles.heading}>Hello from Backend</h1> 
            {loading ? (
                <p className={styles.loading}>Loading greeting...</p>
            ) : error ? (
                <p className={styles.error}>{error}</p>
            ) : (
                <p className={styles.message}>Message: {message}</p>
            )}
        </div>
    );
};

export default HelloPage;