import { useEffect, useState } from 'react';
import { CatchResponse, UseFetchModel } from '../models/useFetch.model';

const catchResponse: CatchResponse<string> = {};
export default function useFetch<T>(url: string): UseFetchModel<T> {
	const [response, setResponse] = useState<T | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<null | string>(null);

	const fetching = async (url: string) => {
		if (catchResponse[url]) {
			const data = catchResponse[url] as T;
			setResponse(data);
			return;
		}

		setLoading(true);
		try {
			const res = await fetch(url);
			if (!res.ok)
				throw new Error('Error: ${response.status} - ${response.statusText}');

			const response = await res.json();
			setResponse(response);
			catchResponse[url] = response;
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message);
			} else {
				setError('Unknown Error');
			}
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetching(url);
	}, [url]);

	return { response, loading, error };
}
