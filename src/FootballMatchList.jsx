// FootballMatchList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFootballMatches } from './actions';
import { Box, Text, Button } from '@chakra-ui/react';

const FootballMatchList = () => {
    const dispatch = useDispatch();
    const { isLoading, isError } = useSelector(state => state);
    const footballMatches = useSelector(state => state.footballMatches);

    console.log('Football Matches:', footballMatches); // Log football matches

    useEffect(() => {
        dispatch(fetchFootballMatches());
    }, [dispatch]);

    return (
        <div>
            <h1>Football Match List</h1>
            {isLoading ? (
                <Box>Loading...</Box>
            ) : isError ? (
                <Box>Error fetching data</Box>
            ) : footballMatches.length === 0 ? (
                <Box>No matches available</Box>
            ) : (
                <div>
                    {Array.isArray(footballMatches) && footballMatches.map(match => (
                        <div key={match.id}>
                            <Text>{match.title}</Text>
                            {/* Render other match details */}
                        </div>
                    ))}
                    <Button>Load More</Button>
                </div>
            )}

        </div>
    );
};

export default FootballMatchList;
