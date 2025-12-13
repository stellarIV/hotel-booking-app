export const createUserOrUpdate = async (userData) => {

    try {
        const response = await fetch('http://localhost:5000/api/users/create-or-update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error syncing user with backend:', error);
    }
};
