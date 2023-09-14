import { useEffect, useRef, useState } from 'react';

function useWebSocket(url: string): WebSocket | null {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const newSocket = new WebSocket(url);

    newSocket.addEventListener('open', () => {
      setSocket(newSocket);
    });

    newSocket.addEventListener('close', () => {
      setSocket(null);
    });

    socketRef.current = newSocket;

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [url]);

  return socket;
}

export default useWebSocket;
 // const socket=useWebSocket('ws://1291322316ls.e2.luyouxia.net:20748/api/v1/interaction/interactiveLargeScreen')
    // useEffect(() => {
    //     console.log(socket);
    //     if (socket) {
    //         socket.addEventListener('open', () => {
    //             console.log(socket);
    //             const message = {
    //               type: 0,
    //               id: 1,
    //             };
    //             // JSON.stringify(message)
    //             // 将数据转换为字符串并发送
    //             socket.send('我发你了');
    //           });
    //       // 在这里处理WebSocket事件
    //       socket.addEventListener('message', (event) => {
    //         const data = JSON.parse(event.data);
    //         console.log('wsk',data);
            
    //         // 处理收到的数据
    //       });
    //       socket.addEventListener('error', (errorEvent) => {
    //         console.error('WebSocket连接发生错误:', errorEvent);
    //       });
          
    //     }
    //   }, [socket]);