export const fetchFakeChats = async (): Promise<string[]> => {
  await new Promise((res) => setTimeout(res, 800));
  return [
    'Chat with Alice',
    'Chat with Bob',
    'Chat with Charlie',
  ];
}; 