interface ContainerProps {
	children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
	return (
		<>
			{children}
			<br />
			<br />
			<button onClick={() => window.history.back()}>Back</button>
		</>
	);
};
