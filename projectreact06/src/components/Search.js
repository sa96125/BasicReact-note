import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 펑셔널 컴포넌트로 이전에 클래스 컴포넌트 검색창을 구현한다.
// Hook을 이용하여 라이프사이클을 대체한다.
const Search = () => {
    const [term, setTerm] = useState('');

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('', {
                params: {

                }
            });
        }

        if (term) {
            getData();
        }

        return () => {
            //clean up function
            //settimeout설정.
        }
    }, [term]);

    return (
        <div>
            <div>
                <input onChange={e => setTerm(e.target.value)} />
            </div>
        </div>
    );
}

export default Search;