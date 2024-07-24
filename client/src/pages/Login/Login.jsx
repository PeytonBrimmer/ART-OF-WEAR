import "./Login.css";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login, { loading, error }] = useMutation(LOGIN_USER);

    const handleLogin = async () => {
        try {
            const { data } = await login({
                variables: { email, password },
            });
            // Handle successful login
        } catch (error) {
            // Handle login error
        }
    };

    return (
        <div>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
            </button>
            {error && <p>{error.message}</p>}
        </div>
    );
};

export default Login;