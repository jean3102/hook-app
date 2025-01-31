import HookApp from './HookApp.tsx';
import CounterComponent from './useState/CounterComponent.tsx';
import UseEffectExample from './useEffect/UseEffectExample.tsx';
import FormWithCustomHook from './useEffect/form/FormWithCustomHook.tsx';
import Cleanup from './useEffect/cleanup/Cleanup.tsx';
import Pokemon from './useEffect/pokemon/Pokemon.tsx';
import LayoutEffectExample from './useLayoutEffect/LayoutEffectExample.tsx';
import FocusScreen from './useRef/FocusScreen.tsx';
import MemoExample from './memo/reactMemo/MemoExample.tsx';
import UseMemoExample from './memo/useMemo/UseMemoExample.tsx';
import CallBackHook from './memo/useCallBack/CallBackHook.tsx';
import { Father } from './memo/exampleMemo/Father.tsx';
import MemoComponents from './memo/MemoComponents.tsx';
import UseReducerComponent from './useReducer/UseReducerComponent.tsx';
import CounterReducer from './useReducer/Counter/CounterReducer.tsx';
import TaskApp from './useReducer/TaskApp/TaskApp.tsx';
import MainApp from './useContext/MainApp.tsx';
import { AuthProvider } from './useContext/provider/AuthProvider.tsx';
import Login from './useContext/Login.tsx';
import { Routes, Route } from 'react-router';
import UserProfile from './useContext/UserProfile .tsx';

export const routes = [
	{ path: '/', element: <HookApp /> },
	{ path: '/useState', element: <CounterComponent /> },
	{ path: '/use-effect-example', element: <UseEffectExample /> },
	{
		path: '/use-effect-example/form-with-custom-hook',
		element: <FormWithCustomHook />,
	},
	{ path: '/use-effect-example/cleanup', element: <Cleanup /> },
	{ path: '/use-effect-example/pokemon-list', element: <Pokemon /> },
	{ path: '/layout-effect', element: <LayoutEffectExample /> },
	{ path: '/useRef', element: <FocusScreen /> },
	{ path: '/use-reducer', element: <UseReducerComponent /> },
	{ path: '/use-reducer/counter-reducer', element: <CounterReducer /> },
	{ path: '/use-reducer/task-app', element: <TaskApp /> },
	{ path: '/react-memo', element: <MemoComponents /> },
	{ path: '/react-memo/memo', element: <MemoExample /> },
	{ path: '/react-memo/use-memo', element: <UseMemoExample /> },
	{ path: '/react-memo/use-callback', element: <CallBackHook /> },
	{ path: '/react-memo/example-memo', element: <Father /> },
	{
		path: '/use-context/*',
		element: (
			<AuthProvider>
				<Routes>
					<Route
						path="/"
						element={<MainApp />}
					/>
					<Route
						path="login"
						element={<Login />}
					/>
					<Route
						path="user-profile"
						element={<UserProfile />}
					/>
				</Routes>
			</AuthProvider>
		),
	},
];
