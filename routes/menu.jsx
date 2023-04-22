import { asset, Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
// import IconBrandGithub from "$icons/brand-github.tsx"

export default function Showcase(props) {
  return (
    <>
      <Head>
        <title>Sushi J Express | Menu</title>
        <meta name="author" content="Taylor Young" />
        <meta
          name="description"
          content="The Sushi J Express Menu"
        />
      </Head>
      <Layout data={props}>
        <section class="max-w-screen-lg mx-auto py-8 px(8) space-y-4 bg-white markdown">
          <h1>
            Menu
          </h1>
          <img src={asset(`/menu.webp`)} alt="the menu" />
        </section>
        <section class="max-w-screen-lg mx-auto py-8 px(8) space-y-4 bg-white markdown">
          <h2>Appetizer</h2>
          <p>
            🌶️ NINJA JALAPENO (4pcs) <span class="float-right">9.5</span>
          </p>
          <p>
            EGG ROLL <span class="float-right">6</span>
          </p>
          <p>
            SEAWEED SALAD <span class="float-right">5.5</span>
          </p>
          <p>
            EDAMAME <span class="float-right">4.5</span>
          </p>
          <p>
            TAKOYAKI (5pcs) <span class="float-right">7</span>
          </p>
          <p>
            GYOZA (dumpling, 6pcs) <span class="float-right">7</span>
          </p>
          <p>
            CUCUMBER SUNOMONO <span class="float-right">6</span>
          </p>
          <p>
            CHICKEN BITS <span class="float-right">7</span>
          </p>
          <p>
            *POKE APPETIZER (tuna. salmon or mix){" "}
            <span class="float-right">14</span>
          </p>
        </section>
        <section class="max-w-screen-lg mx-auto py-8 px(8) space-y-4 bg-white markdown">
          <h2>Soup, Rice, Salad</h2>
          <p>
            MISO SOUP <span class="float-right">2.5</span>
          </p>
          <p>
            RICE <span class="float-right">2.5</span>
          </p>
          <p>
            GREEN SALAD <span class="float-right">4.5</span>
          </p>
          <p>
            🍣 SASHIMI SALAD <span class="float-right">18</span>
          </p>
        </section>
        <section class="max-w-screen-lg mx-auto py-8 px(8) space-y-4 bg-white markdown">
          <h2>Bowl</h2>
          <p>
            TERIYAKI CHICKEN BOWL <span class="float-right">8.5</span>
            <br />
            <span class="float-right">
              <span class="text-sm">
                ADD VEGGIE (broccoli and carrots)
              </span>{" "}
              +1.5
            </span>
            <br />
          </p>
          <div class="clear-both"></div>
          <p>
            KAKIAGE BOWL (2pcs) <span class="float-right">8.5</span>
          </p>
          <p>
            TEN DON (1 kakiage, 2 shrimp tempura){" "}
            <span class="float-right">12</span>
          </p>
          <p>
            SAUCE KATSU BOWL (chicken)<span class="float-right">11</span>
          </p>
          <p>
            🍣 POKE BOWL (tuna, salmon or Mix )<span class="float-right">
              16
            </span>
          </p>
        </section>
        <section class="max-w-screen-lg mx-auto py-8 px(8) space-y-4 bg-white markdown">
          <h2>Meal</h2>
          <p class="text-sm">served with rice and green salad</p>
          <p>
            TERIYAKI CHICKEN<span class="float-right">12</span>
          </p>
          <p>
            CHICKEN KATSU<span class="float-right">12.5</span>
          </p>
          <p>
            AJI FRY (panko breaded deep fry spanish
            mackerel)<span class="float-right">12.5</span>
          </p>
          <p>
            <span class="float-right"></span>
          </p>
        </section>
        <section class="max-w-screen-lg mx-auto py-8 px(8) space-y-4 bg-white markdown">
          <p>🍣 Raw Fish Ingredients</p>
          <p>🌶️ This Dish is Spicy</p>
          <p>MOST ITEMS CONTAIN SESAME SEEDS</p>
          <p>INGREDIENTS DEPENDING ON AVAILABILITY</p>
          <p>SUBSTITUTION COST EXTRA</p>
        </section>
      </Layout>
    </>
  )
}
