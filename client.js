function getClient(baseURL) {
	const client = axios.create({
		baseURL,
	});

	return client;
}

class ApiClient {
	constructor(baseURL) {
		this.client = getClient(baseURL);
	}

	async get(url) {
		try {
			const { data } = await this.client.get(url);

			return data;
		} catch (error) {
			return error;
		}
	}
}
