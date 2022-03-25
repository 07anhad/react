import React from 'react';
import { useEffect } from 'react';

const TestComponent = () => {

    useEffect(() => {
        console.log('component did mount');

        return () => {
            console.log('component did unmount')
        };

    }, []);

    return <div>
        other component
    </div>
}

export default TestComponent;
