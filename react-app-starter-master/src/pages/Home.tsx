import { Button } from '@progress/kendo-react-buttons';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home-button">
            <Button>
                <Link to="/login">Login</Link>
            </Button>
            <Button>
                <Link to="/signup">Signup</Link>
            </Button>
            <Button>
                <Link to="/feedbackform">Feedback</Link>
            </Button>
        </div>
    );
};

export default Home;
