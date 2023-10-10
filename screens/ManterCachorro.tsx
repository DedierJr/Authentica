import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {  KeyboardAvoidingView, Alert, Text,  Pressable, Modal, TextInput,  TouchableOpacity,  View,} from "react-native";
import { auth, firestore } from "../firebase";
import meuestilo from "../meuestilo";
import { Cachorro } from "../model/Cachorro";

const ManterCachorro = () => {
  const [formCachorro, setFormCachorro] = useState<Partial<Cachorro>>({})
  const cachorroRef = 
  firestore.collection('Usuario').doc(auth.currentUser?.uid)
  .collection('Cachorro')

  const navigation = useNavigation();

  useEffect(() => {

  }, []);

  

  const limparFormulario=()=>{
    setFormCachorro({})
  }

  const cancelar = async() => {
    limparFormulario()
  }
  const salvar = async() => {
    const cachorroRefComId = cachorroRef.doc();
    const cachorro= new Cachorro(formCachorro);
    cachorro.id=cachorroRefComId.id

    console.log(cachorro)
    cachorroRefComId.set(cachorro.toFirestore()).then(() => {
         alert("Cachorro" + cachorro.nome + " Adicionado com Sucesso");
         console.log("Cachorro" + cachorro);
         console.log("Cachorro ToString: "+cachorro.toString())
         limparFormulario()
         });
    };
    
  
  return (
    <KeyboardAvoidingView 
    style={meuestilo.container}
    behavior="padding">
      <View style={meuestilo.inputContainer}>
        <TextInput
          placeholder="Nome"
          value={formCachorro.nome}
          onChangeText={val => setFormCachorro({ ...formCachorro, nome: val })}
          style={meuestilo.input}
        />
        <TextInput
          placeholder="Sexo"
          value={formCachorro.sexo}
          onChangeText={val => setFormCachorro({ ...formCachorro, sexo: val })}
          style={meuestilo.input}
        />
        <TextInput
          placeholder="Raca"
          value={formCachorro.raca}
          onChangeText={val => setFormCachorro({ ...formCachorro, raca: val })}
          style={meuestilo.input}
        />

        <TextInput
          placeholder="DataNascimento"
          value={formCachorro.datanascimento}
          onChangeText={val => setFormCachorro({ ...formCachorro, datanascimento: val })}
          style={meuestilo.input}
        />
      </View>

      <View style={meuestilo.buttonContainer}>
        <TouchableOpacity onPress={cancelar} style={meuestilo.button}>
          <Text style={meuestilo.buttonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={salvar}
          style={[meuestilo.button, meuestilo.buttonOutline]}
        >
          <Text style={meuestilo.buttonOutlineText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ManterCachorro;

