import React, { useState } from "react";
import { Button, View } from "react-native-web";

const Incremento = () => {
    const [contador, setContador] = useState(0);

    return (
        <View>
            <div>
                <p>Contagem: {contador}</p>
                <Button 
                    onPress={() => setContador (contador + 1)}
                    title="Incrementar" 
                />
                <Button 
                    onPress={() => setContador (contador - 1)}
                    title="Decrementar"
                />
            </div>
        </View>
    );
};

export default Incremento;
