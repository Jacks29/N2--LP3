import React, { useState } from "react";
import { Button, View, Text, Picker, StyleSheet, Image } from "react-native";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6bfaff",
      }}
    >
      <View
        style={{
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          alignItems: "center",
          borderWidth: 2,
          width: 350,
        }}
      >
        <Text>Caico Eduardo</Text>
        <Text>
          Pesquisa imagem aleatoria de acordo com o tipo e categoria de sua
          escolha
        </Text>
        <Button
          title="Acessar Waifu Picker"
          onPress={() => navigation.navigate("CaicoEduardo")}
        />
      </View>

      <View
        style={{
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          alignItems: "center",
          borderWidth: 2,
          width: 350,
        }}
      >
        <Text>João Vitor</Text>
        <Text>Pesquisa imagem aleatoria de carros do jogo Forza Horizon 4</Text>
        <Button
          title="Acessar Random Car"
          onPress={() => navigation.navigate("JoaoVitor")}
        />
      </View>

      <View
        style={{
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          alignItems: "center",
          borderWidth: 2,
          width: 350,
        }}
      >
        <Text>Humberto Gonzaga</Text>
        <Text>Pesquisa piada de Chuck Norris aleatoria da internet</Text>
        <Button
          title="Acessar Random Joke Picker"
          onPress={() => navigation.navigate("HumbertoGonzaga")}
        />
      </View>

      <View
        style={{
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          alignItems: "center",
          borderWidth: 2,
          width: 350,
        }}
      >
        <Text>Jean Alves</Text>
        <Text>Pesquisa frase aleatoria de animes</Text>
        <Button
          title="Acessar Random Anime Quote Picker"
          onPress={() => navigation.navigate("JeanAlves")}
        />
      </View>
    </View>
  );
}

function CaicoEduardoScreen() {
  const [selectedType, setselectedType] = useState("sfw");
  const [selectedCategory, setselectedCategory] = useState("waifu");
  const [imagemApi, setImagemApi] = useState(
    "https://pm1.narvii.com/6229/48b18017f9735fe890dc583b891ce53dfadbcb32_hq.jpg"
  );

  const GetImage = () => {
    return fetch(
      "https://api.waifu.pics/" + selectedType + "/" + selectedCategory + ""
    )
      .then((response) => response.json())
      .then((json) => {
        setImagemApi(json.url);
        return console.log(json.url);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuBotoes}>
        <Text>Tipo Imagem</Text>
        <Picker
          style={{ height: 50, width: 150 }}
          selectedValue={selectedType}
          onValueChange={(itemValue, itemIndex) => setselectedType(itemValue)}
        >
          <Picker.Item label="NSFW" value="nsfw" />
          <Picker.Item label="SFW" value="sfw" />
        </Picker>
        <Text>Categoria</Text>
        <Picker
          style={{ height: 50, width: 150 }}
          selectedValue={selectedCategory}
          onValueChange={(itemValue, itemIndex) =>
            setselectedCategory(itemValue)
          }
        >
          <Picker.Item label="waifu" value="waifu" />
          <Picker.Item label="neko" value="neko" />
        </Picker>

        <Button title="Pegar Imagem" onPress={GetImage} />
      </View>

      <View style={styles.menuImagem}>
        <Image
          style={{ height: 500, width: 450 }}
          source={{ uri: imagemApi }}
        />
      </View>
    </View>
  );
}

function JoaoVitorScreen() {
  const [imagemApi, setImagemApi] = useState(
    "https://imagensemoldes.com.br/wp-content/uploads/2020/07/Ponto-de-Interroga%C3%A7%C3%A3o-PNG.png"
  );

  const GetImage = () => {
    return fetch("https://forza-api.tk/")
      .then((response) => response.json())
      .then((json) => {
        setImagemApi(json.image);
        return console.log(json.image);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Button title="Pegar Imagem" onPress={GetImage} />
      </View>

      <View style={styles.menuImagem}>
        <Image
          style={{ height: 500, width: 450 }}
          source={{ uri: imagemApi }}
        />
      </View>
    </View>
  );
}

function HumbertoGonzagaScreen() {
  const [piadaApi, setpiadaApi] = useState(
    "clique no botao acima para pesquisar uma piada aleatoira"
  );

  const GetJoke = () => {
    return fetch("http://api.icndb.com/jokes/random")
      .then((response) => response.json())
      .then((json) => {
        setpiadaApi(json.value.joke);
        return console.log(json.value.joke);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Button title="Pesquisar piada" onPress={GetJoke} />
      </View>

      <View style={styles.menuImagem}>
        <Text>{piadaApi}</Text>
      </View>
    </View>
  );
}

function JeanAlvesScreen() {
  const [fraseApi, setfraseApi] = useState(
    "clique no botao acima para pesquisar uma frase aleatoria"
  );
  const [animeApi, setanimeApi] = useState("");
  const [characterApi, setcharacterApi] = useState("");

  const GetJoke = () => {
    return fetch("https://animechan.vercel.app/api/random")
      .then((response) => response.json())
      .then((json) => {
        setfraseApi(json.quote);
        setanimeApi(json.anime);
        setcharacterApi(json.character);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingBottom: 10 }}>
        <Button title="Pesquisar frase" onPress={GetJoke} />
      </View>

      <View style={(styles.menuImagem, { width: 350 })}>
        <Text>
          Anime: {animeApi} {"\n"}
        </Text>
        <Text>
          Personagem:{characterApi} {"\n"}
        </Text>
        <Text>Frase:{fraseApi}</Text>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CaicoEduardo" component={CaicoEduardoScreen} />
        <Stack.Screen name="JoaoVitor" component={JoaoVitorScreen} />
        <Stack.Screen
          name="HumbertoGonzaga"
          component={HumbertoGonzagaScreen}
        />
        <Stack.Screen name="JeanAlves" component={JeanAlvesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    backgroundColor: "#6bfaff",
  },
  menuBotoes: {
    paddingTop: 5,
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingBottom: 5,
    marginBottom: 10,
  },
  menuImagem: {
    paddingTop: 25,
    paddingBottom: 5,
  },
});

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    backgroundColor: "#4287f5",
  },
  menuBotoes: {
    paddingTop: 5,
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingBottom: 5,
    marginBottom: 10,
  },
  menuImagem: {
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default App;
