import Link from "next/link";
import * as React from "react";
import Notification from "../ui/Notification";
import WappButton from "../ui/WappButton";
import { Product } from "./types";

interface ProductCardProps {
  products: Product[];
}

const parseCurrency = (value: number) => {
  return value.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
};

const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
  const [cart, setCart] = React.useState<Product[]>([]);
  const [notification, setNotification] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (notification === true) {
      const timer = setTimeout(() => {
        setNotification(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const whatsappText = React.useMemo(() => {
    return cart
      .reduce(
        (message, product) =>
          message.concat(
            `\n * ${product.name} - ${parseCurrency(+product.price)}\n`
          ),
        ``
      )
      .concat(
        `\nTotal a pagar: ${parseCurrency(
          cart.reduce((total, product) => total + +product.price, 0)
        )}`
      );
  }, [cart]);

  const handleAddProduct = (product: any) => {
    if (product.price === "SIN STOCK") {
      setNotification(true);
    } else {
      setCart((cart) => cart.concat(product));
    }
    return;
  };

  return (
    <>
      <div className='mt-5 grid grid-cols-2 md:grid-cols-5 place-items-center justify-items-center gap-3'>
        {products.map((product, index) => (
          <div
            key={index}
            className='bg-white px-5 py-[1rem] gap-1 rounded-lg max-w-[150px] shadow-lg flex flex-col  items-center justify-center mb-1'
          >
            <div>
              <picture>
                <img
                  src={product.image}
                  className='w-[100px] h-[100px] object-cover'
                  alt={product.category}
                />
              </picture>
            </div>
            <div className='flex flex-col'>
              <p className='text-sm text-center'>{product.name}</p>
              <div
                className={`${
                  product.price === "SIN STOCK" ? "bg-red-400" : "bg-green-400"
                } rounded-md mt-5 text-white font-bold shadow-sm`}
              >
                <p className='text-center'>
                  {product.price === "SIN STOCK"
                    ? "sin stock"
                    : parseCurrency(+product.price)}
                </p>
              </div>

              <button
                onClick={() => handleAddProduct(product)}
                className='bg-green-600 rounded-full text-white shadow-lg hover:bg-green-400 mt-6'
              >
                + Añadir
              </button>
            </div>
          </div>
        ))}

        {notification && (
          <Notification
            message='Stock agotado 😭! Intente con otro producto'
            status='error'
          />
        )}

        {/* Boolean(cart.length) */}

        {Boolean(cart.length) && (
          <Link
            href={`https://wa.me/543794924822?text=Hola Maria Eugenia! Quiero pedirte:${encodeURIComponent(
              whatsappText
            )}`}
          >
            <a>
              <WappButton>Finalizar Compra ({cart.length})</WappButton>
            </a>
          </Link>
        )}
      </div>

      <div className='absolute -z-30 w-[100vw] h-[100vh] right-[10%] rounded-full green__gradient top-[10rem]' />
      <div className='absolute -z-30 w-[100vw] h-[100vh] right-[10%] rounded-full green__gradient top-[30rem]' />
      <div className='absolute -z-30 w-[100vw] h-[100vh] right-[10%] rounded-full green__gradient top-[45rem]' />

      <div className='absolute -z-30 w-[100vw] h-[100vh] right-[10%] rounded-full green__gradient top-[80rem]' />
      <div className='sm:hidden absolute -z-30 w-[100vw] h-[100vh] right-[10%] rounded-full green__gradient top-[150rem]' />
    </>
  );
};

export default ProductCard;
