import React, { useCallback, useRef, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { tailwind } from "tailwind";
import { Button } from "~/components/Button";
import {  BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { BeakerIcon } from '@heroicons/react/24/solid'
interface ProductProps {}

export const Product: React.FunctionComponent<ProductProps> = ({}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const buttonPressed = () => {
   bottomSheetRef.current?.present();
    console.log('buttonPressed')
  };

  const renderBackdrop = useCallback((props) => {
    return (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    );
  }, []);

  const Diminuer = () => {
    console.log('Diminuer');
}
const Ajouter = () => {
  console.log('Ajouter');
}

  const goToCart = () => {
    // console.log("goToCart");
    bottomSheetRef.current?.present();
    // TODO: navigation.navigate('Cart');
  };

  const continuePurchase = () => {
    console.log("continue");
    bottomSheetRef.current?.dismiss();
  };

  return (
    <>
      <ScrollView style={tailwind("w-full h-full")}>
        <Image
          source={{
            uri: "https://th.bing.com/th/id/R.7319df04787c3bec8da315d8dee1f743?rik=TUO%2bD9XSRlRnGQ&riu=http%3a%2f%2fft-pharma.com%2fwp-content%2fuploads%2f2020%2f09%2fParacetamol.jpg&ehk=E93TTZY2nb0MdjLXsTFS74bwH7q5K1AHq7XZcX2mjnA%3d&risl=&pid=ImgRaw&r=0",
          }}
          resizeMode="cover"
          style={tailwind("rounded w-full h-64")}
        />
        <View style={tailwind("p-5")}>
          <Text style={tailwind("font-bold text-xl tracking-wide uppercase")}>
            paracetamol
          </Text>
          <View style={tailwind("flex flex-row items-center mt-3")}>
            <Text
              style={tailwind("text-xs text-black font-bold tracking-wide")}
            >
              1000 Frs
            </Text>
            <Text style={tailwind("text-xs text-gray-500 ml-5 tracking-wide")}>
              Paquets de 10 Plaquetes
            </Text>
          </View>
        
          <View style={tailwind("h-px bg-gray-200 mb-6")} />
          <Button onPress={goToCart}  type="secondary">
          
           Ajouter au panier
          </Button>
          <View style={tailwind("h-3")} />
          <Button onPress={ () =>buttonPressed} type="secondary">
          Continuer les Achats
          </Button>
          <View style={tailwind("h-3")} />
          <Button onPress={()=> buttonPressed} type="primary">
           Acheter 
          </Button>
          <View style={tailwind("h-px bg-gray-200 my-8")} />
          <Text style={tailwind("uppercase text-sm tracking-wide text-center")}>
            Allez dans une autre{" "}
            <Text style={tailwind("underline text-gray-500")}> Pharmacies</Text>
          </Text>
          
          <Text
            style={tailwind("mt-8 text-center uppercase text-xs tracking-wide")}
          >
           Medlivs © 2022
          </Text>
        </View>
      </ScrollView>

      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        snapPoints={["42%, 82%"]}
        backdropComponent={renderBackdrop}
      >
        <View style={tailwind("w-full p-5")}>
          <Text style={tailwind("uppercase text-lg font-bold tracking-wide")}>
          paracetamol 🎉
          </Text>
          <BeakerIcon  className="h-6 w-6 text-red-500"/>
          <View style={tailwind("flex flex-row items-center mt-3")}>
            <Text
              style={tailwind("text-xs text-black font-bold tracking-wide")}
            >
              1000 Frs
            </Text>
            <Text style={tailwind("text-xs text-gray-500 ml-5 tracking-wide")}>
              Paquets de 10 Plaquetes
            </Text>
           <View style={tailwind("flex justfy-end")}>
             <Button onPress={Ajouter}>+</Button> 
                 <View style={tailwind("h-3")}/>
                 <Text>1</Text> 
            <Button onPress={Diminuer}>-</Button>
            </View>
          </View>
          <Text style={tailwind("mt-8 text-sm text-gray-500 mb-2")}>
            Que souhaitez-vous faire ?
          </Text>
          <Button onPress={continuePurchase} type="secondary">
            Continuer mes achats
          </Button>
          <View style={tailwind("h-3")} />
          <Button onPress={goToCart}>Accéder au panier</Button>
        </View>
      </BottomSheetModal>
    </>
  );
};
