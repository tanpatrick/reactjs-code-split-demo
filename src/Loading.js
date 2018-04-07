import React from 'react';

export default function Loading({ isLoading, pastDelay, error }) {
    if (isLoading && pastDelay) {
        return <p>Loading...</p>;
    } else if (error && !isLoading) {
        console.error('error', error);
        return <p>Error!</p>;
    } else {
        return null;
    }
}