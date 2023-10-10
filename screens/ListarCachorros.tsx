  import React, { useState, useEffect } from "react";
  import {ActivityIndicator,SafeAreaView,View,FlatList,Text,StatusBar,} from "react-native";
  import { auth, firestore } from "../firebase";
  import MeuEstilo from "../meuestilo";
  import { Cachorro } from "../model/Cachorro";
  const ListarCachorros = () => {
  const [loading, setLoading] = useState(true); // Set loading to true
  const [cachorros, setCachorros] = useState<Cachorro[]>([]); // Initial empty array
  const cachorroRef = 
  firestore.collection('Usuario').doc(auth.currentUser?.uid)
  .collection('Cachorro')
  //const cachorroRef = firestore.collection('Cachorro');
  
  useEffect(() => {
      const subscriber = cachorroRef
          .onSnapshot((querySnapshot) => {
          const cachorros = [];
          querySnapshot.forEach((documentSnapshot) => {
            cachorros.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
          });
        });
          setCachorros(cachorros);
          setLoading(false);
    });
  return () => subscriber();
  }, [cachorros]);


    if (loading) {
    return <ActivityIndicator />;
    }

  
  const Item = ({ item }) => (
    <View style={MeuEstilo.item}>
      <Text style={MeuEstilo.title}>Nome : {item.nome}</Text>
      <Text style={MeuEstilo.title}>Raça : {item.raca}</Text>  
      <Text style={MeuEstilo.title}>Sexo : {item.sexo}</Text>  
      <Text style={MeuEstilo.title}>DataNascimento : {item.datanascimento}</Text>  
    </View>
  );

  const renderItem = ({ item }) => <Item item={item} />;
  
  return (
    <SafeAreaView style={MeuEstilo.containerlistar}>
      <FlatList
        data={cachorros}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
    );
  };
  export default ListarCachorros;
