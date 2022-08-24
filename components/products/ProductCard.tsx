import Link from "next/link";
import * as React from "react";
import Notification from "../ui/Notification";
import Remove from "../ui/Remove";
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
      <div className='mt-5 grid grid-cols-2 md:grid-cols-5 place-items-center justify-items-center gap-3 bg-green-300/20'>
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
          <div className='bg-white w-[100vw] fixed top-0 left-0 py-2 flex flex-row items-center justify-center border shadow-md z-[99]'>
            <Link
              href={`https://wa.me/543794924822?text=Hola Maria Eugenia! Quiero pedirte:${encodeURIComponent(
                whatsappText
              )}`}
            >
              <a>
                <button className='bg-green-600 py-2 px-5 text-white rounded-xl shadow-md flex gap-2'>
                  Finalizar Compra ({cart.length})
                  <div>
                    <picture>
                      <img
                        src='assets\whatsapplogo.svg'
                        className='object-cover'
                        alt='whatsapp'
                      />
                    </picture>
                  </div>
                </button>
              </a>
            </Link>

            <Remove onClick={()=>setCart([])}>{}</Remove>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCard;
