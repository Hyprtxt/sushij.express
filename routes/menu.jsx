import { asset, Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
// import IconBrandGithub from "$icons/brand-github.tsx"

const SECTION_CLASS =
  "max-w-screen-lg mx-auto py-8 px(8) space-y-4 bg-white markdown menu-section"

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
        <section class={SECTION_CLASS}>
          <h1>
            Menu
          </h1>
          <img src={asset(`/menu.webp`)} alt="the menu" />
        </section>
        <section class={SECTION_CLASS}>
          <p>🍣 Raw Fish Ingredients</p>
          <p>🌶️ This Dish is Spicy</p>
        </section>
        <section class={SECTION_CLASS}>
          <h2>Noodles</h2>
          <p class="menu-item">
            <span>TEMPURA UDON or SOBA{" "}</span>
            <span class="float-right">12</span>
          </p>
          <p class="menu-item">
            <span>KITSUNE UDON or SOBA{" "}</span>
            <span class="float-right">9</span>
          </p>
          <p class="menu-item">
            <span>KAKIAGE UDON or SOBA{" "}</span>
            <span class="float-right">10</span>
          </p>
          <p class="menu-item">
            <span>Add 2pcs Inari{" "}</span>
            <span class="float-right">+2</span>
          </p>
          <p class="menu-item">
            <span>EXTRA SAUCES etc&hellip;{" "}</span>
            <span class="float-right">+1</span>
          </p>
        </section>
        <section class={SECTION_CLASS}>
          <h2>Combo</h2>
          <p class="text-sm">served with rice and green salad</p>
          <p class="menu-item">
            <span>Match One Set of Main and Sushi/Side</span>
            <span class="float-right">15.5</span>
          </p>
          <div class="float-left">
            <h3>Main</h3>
            <ul>
              <li>TERIYAKI CHICKEN</li>
              <li>CHICKEN KATSU</li>
              <li>AJI FRY</li>
            </ul>
          </div>

          <div class="float-left pl-5">
            <h3>Side</h3>
            <ul>
              <li>California roll (4pcs)</li>
              <li>Spicy crab roll (4pcs)</li>
              <li>🌶️ 🍣 Spicy tuna roll (4pcs)</li>
              <li>Shrimp tempura roll (4pcs)</li>
              <li>🍣 Salmon roll (4pcs)</li>
              <li>Cucumber roll (6pcs)</li>
              <li>Egg roll (2pcs)</li>
              <li>Sesame ball (3pcs)</li>
              <li>Inari (2pcs)</li>
            </ul>
          </div>
          <div class="clear-both">
          </div>
          <p class="menu-item">
            <span>
              🍣 HAND ROLL SET (2 hand rolls, 2 egg rolls, salad, miso soup)
            </span>
            <span class="float-right">14</span>
          </p>
          <p class="menu-item">
            <span>🍣 CHIRASHI SUSHI BOWL (served with miso soup)</span>
            <span class="float-right">18</span>
          </p>
          <p class="menu-item">
            <span>🍣 SALMON SUSHI BOWL (served with miso soup)</span>
            <span class="float-right">18</span>
          </p>
          <p class="menu-item">
            <span>🍣 SUSHI SAMPLER</span>
            <span class="float-right">13</span>
          </p>
          <p class="menu-item">
            <span>2pcs INARI SUSHI (fried tofu pouch)</span>
            <span class="float-right">3.5</span>
          </p>
          <p class="menu-item">
            <span>5pcs INARI SUSHI (fried tofu pouch)</span>
            <span class="float-right">6.5</span>
          </p>
        </section>

        <section class={SECTION_CLASS}>
          <h2>Appetizer</h2>
          <p class="menu-item">
            <span>🌶️ NINJA JALAPENO (4pcs)</span>
            <span class="float-right">9.5</span>
          </p>
          <p class="menu-item">
            <span>EGG ROLL</span>
            <span class="float-right">6</span>
          </p>
          <p class="menu-item">
            <span>SEAWEED SALAD</span>
            <span class="float-right">5.5</span>
          </p>
          <p class="menu-item">
            <span>EDAMAME</span>
            <span class="float-right">4.5</span>
          </p>
          <p class="menu-item">
            <span>TAKOYAKI (5pcs)</span>
            <span class="float-right">7</span>
          </p>
          <p class="menu-item">
            <span>GYOZA (dumpling, 6pcs)</span>
            <span class="float-right">7</span>
          </p>
          <p class="menu-item">
            <span>CUCUMBER SUNOMONO</span>
            <span class="float-right">6</span>
          </p>
          <p class="menu-item">
            <span>CHICKEN BITS</span>
            <span class="float-right">7</span>
          </p>
          <p class="menu-item">
            <span>🍣 POKE APPETIZER (tuna. salmon or mix){" "}</span>
            <span class="float-right">14</span>
          </p>
        </section>
        <section class={SECTION_CLASS}>
          <h2>Soup, Rice, Salad</h2>
          <p class="menu-item">
            <span>
              MISO SOUP
            </span>
            <span class="float-right">2.5</span>
          </p>
          <p class="menu-item">
            <span>
              RICE
            </span>
            <span class="float-right">2.5</span>
          </p>
          <p class="menu-item">
            <span>
              GREEN SALAD
            </span>
            <span class="float-right">4.5</span>
          </p>
          <p class="menu-item">
            <span>
              🍣 SASHIMI SALAD
            </span>
            <span class="float-right">18</span>
          </p>
        </section>
        <section class={SECTION_CLASS}>
          <h2>Bowl</h2>
          <p class="menu-item">
            <span>TERIYAKI CHICKEN BOWL</span>{" "}
            <span class="float-right">8.5</span>
          </p>
          <p>
            <span class="float-right">
              <span class="text-sm">
                ADD VEGGIE (broccoli and carrots)
              </span>{" "}
              +1.5
            </span>
            <br />
          </p>
          <div class="clear-both"></div>
          <p class="menu-item">
            <span>
              KAKIAGE BOWL (2pcs)
            </span>
            <span class="float-right">8.5</span>
          </p>
          <p class="menu-item">
            <span>
              TEN DON (1 kakiage, 2 shrimp tempura){" "}
            </span>
            <span class="float-right">12</span>
          </p>
          <p class="menu-item">
            <span>
              SAUCE KATSU BOWL (chicken)
            </span>
            <span class="float-right">11</span>
          </p>
          <p class="menu-item">
            <span>
              🍣 POKE BOWL (tuna, salmon or Mix )
            </span>
            <span class="float-right">
              16
            </span>
          </p>
        </section>
        <section class={SECTION_CLASS}>
          <h2>Meal</h2>
          <p class="text-sm">served with rice and green salad</p>
          <p class="menu-item">
            <span>
              TERIYAKI CHICKEN
            </span>
            <span class="float-right">12</span>
          </p>
          <p class="menu-item">
            <span>
              CHICKEN KATSU
            </span>
            <span class="float-right">12.5</span>
          </p>
          <p class="menu-item">
            <span>
              AJI FRY (panko breaded deep fry spanish mackerel)
            </span>
            <span class="float-right">12.5</span>
          </p>
        </section>
        <section class={SECTION_CLASS}>
          <h2>Nigiri Sushi (2pcs)</h2>
          <p class="menu-item">
            <span>
              🍣 ALBACORE
            </span>
            <span class="float-right">6.5</span>
          </p>
          <p class="menu-item">
            <span>
              UNAGI (fresh water eel)
            </span>
            <span class="float-right">6.5</span>
          </p>
          <p class="menu-item">
            <span>
              🍣 SALMON
            </span>
            <span class="float-right">6.5</span>
          </p>
          <p class="menu-item">
            <span>
              SHRIMP
            </span>
            <span class="float-right">5.5</span>
          </p>
          <p class="menu-item">
            <span>
              🍣 TUNA
            </span>
            <span class="float-right">6.5</span>
          </p>
          <p class="menu-item">
            <span>
              🍣 WHITE FISH
            </span>
            <span class="float-right">5.5</span>
          </p>
        </section>
        <section class={SECTION_CLASS}>
          <h2>Maki Sushi (8pcs)</h2>
          <p class="menu-item">
            <span>
              🌶️ 🍣 SPICY TUNA or SPICY SALMON
            </span>
            <span class="float-right">10</span>
          </p>
          <p class="menu-item">
            <span>
              🍣 TUNA or SALMON
            </span>
            <span class="float-right">9</span>
          </p>
          <p class="menu-item">
            <span>
              🌶️🌶️ 🍣 LAVA (spicy imitation crab, jalapeño, spicy tuna or salmon)
            </span>
            <span class="float-right">12</span>
          </p>
          <p class="menu-item">
            <span>
              🍣 RAINBOW
            </span>
            <span class="float-right">14</span>
          </p>
          <p class="menu-item">
            <span>
              🍣 ATLANTIC (avocado cream cheese on top)
            </span>
            <span class="float-right">14</span>
          </p>
          <p class="menu-item">
            <span>
              🍣 POKE (seasoned tuna, avocado, spicy mayo green onion)
            </span>
            <span class="float-right">14</span>
          </p>
          <p class="menu-item">
            <span>
              🍣 PHILADELPHIA (smoke salmon. cream cheese)
            </span>
            <span class="float-right">11</span>
          </p>
          <p class="menu-item">
            <span>
              🍣 ALASKA (smoke salmon, avocado)
            </span>
            <span class="float-right">11</span>
          </p>
          <p class="menu-item">
            <span>
              🌶️ 🍣 DYNAMITE (spicy crab roll + spicy salmon, scallop, 3 sauces)
            </span>
            <span class="float-right">14.5</span>
          </p>
          <p class="menu-item">
            <span>
              🌶️ 🍣 LAS VEGAS (spicy salmon, avocado, cream cheese, deep fry)
            </span>
            <span class="float-right">15</span>
          </p>
          <p class="menu-item">
            <span>
              CRUNCHY (shrimp tempura, avacado, eel sauce, spicy mayo,
              crunchies)
            </span>
            <span class="float-right">12</span>
          </p>
          <p class="menu-item">
            <span>
              CALIFORNIA
            </span>
            <span class="float-right">6.5</span>
          </p>
          <p class="menu-item">
            <span>
              🌶️ SPICY CRAB (spicy surimi, cucumber)
            </span>
            <span class="float-right">6.5</span>
          </p>
          <p class="menu-item">
            <span>
              DRAGON (shrimp tempura roll + eel avocado eel sauce)
            </span>
            <span class="float-right">14</span>
          </p>
          <p class="menu-item">
            <span>
              DOUBLE SHRIMP
            </span>
            <span class="float-right">14</span>
          </p>
          <p class="menu-item">
            <span>
              SPIDER DELIGHT (fried soft shell crab, cream cheese, avocado,
              green onion, masago)
            </span>
            <span class="float-right">14.5</span>
          </p>
          <p class="menu-item">
            <span>
              SPIDER (5pcs) (fried soft shell crab)
            </span>
            <span class="float-right">13.5</span>
          </p>
          <p class="menu-item">
            <span>
              CATERPILLAR (eel avocado, eel sauce)
            </span>
            <span class="float-right">13</span>
          </p>
          <p class="menu-item">
            <span>
              КАРРА (6pcs) (cucumber)
            </span>
            <span class="float-right">4</span>
          </p>
          <p class="menu-item">
            <span>
              AVOCADO
            </span>
            <span class="float-right">5.5</span>
          </p>
          <p class="menu-item">
            <span>
              VEGETABLE (7 veggies)
            </span>
            <span class="float-right">12</span>
          </p>
        </section>

        <section class={SECTION_CLASS}>
          <h2>Sashimi</h2>
          <p class="menu-item">
            <span>
              🍣 SALMON
            </span>
            <span class="float-right">15</span>
          </p>
          <p class="menu-item">
            <span>
              🍣 TUNA
            </span>
            <span class="float-right">15</span>
          </p>
          <p class="menu-item">
            <span>
              🍣 ALBACORE
            </span>
            <span class="float-right">15</span>
          </p>
          <br />
          <p class="menu-item">
            <span>
              🍣 Sashimi Sampler (tuna, salmon, white fish, 2pcs ea.)
            </span>
            <span class="float-right">15</span>
          </p>
          <p class="menu-item">
            <span>
              🍣 Sashimi Mori (tuna, salmon, white fish, albacore 3pcs ea.
              Served with rice and miso soup)
            </span>
            <span class="float-right">25</span>
          </p>
        </section>
        <section class={SECTION_CLASS}>
          <h2>Party Platter</h2>
          <p>Call at least 2 hours in advance please</p>
          <p class="menu-item">
            <span>
              MIXED ROLL PLATTER (37pcs)<br />
              (1 shrimp tempura roll, 2 california rolls, 1 spicy crab roll,
              5pcs inari)
            </span>
            <span class="float-right">33</span>
          </p>
          <p class="menu-item">
            <span>
              🌶️ 🍣 Spicy Sushi Platter (40 pcs)<br />
              (1 spicy tuna, 1 spicy salmon, 2 spicy crab rolls, 1 lava roll)
            </span>
            <span class="float-right">42</span>
          </p>
          <p class="menu-item">
            <span>
              🍣 Roll Platter (40pc)<br />
              (2 california rolls, 1 shrimp tempura roll, 1 spicy tuna or spicy
              salmon, 1 rainbow roll)
            </span>
            <span class="float-right">44</span>
          </p>
          <p class="menu-item">
            <span>
              VEGETABLE SUSHI PLATTER (41pcs)<br />
              (1 vegetable roll, 1 avacado roll, 1 avacado + carrots roll, 5pcs
              inari, 2 cucumber roll)
            </span>
            <span class="float-right">35</span>
          </p>
          <p class="menu-item">
            <span>
              🍣 NIGIRI & ROLL PLATER (39pcs)<br />
              (tuna, salmon, albacore, white fish, shrimp, 3pcs each nigiri, 2
              california rolls, 1 spicy tuna or spicy salmon roll)
            </span>
            <span class="float-right">58</span>
          </p>
        </section>
        <section class={SECTION_CLASS}>
          <h2>Additional</h2>
          <p>AVOCADO inside ($1.25)</p>
          <p>AVOCADO on top ($2.50)</p>
          <p>JALAPEÑO (75¢)</p>
          <p>CUCUMBER (75¢)</p>
          <p>MASAGO ($4)</p>
          <p>SOY PAPER ($1.25)</p>
          <p>GREEN ONIONS (75¢)</p>
          <p>CRUNCHYS ($1)</p>
          <p>CREAM CHEESE ($1)</p>
          <p>EXTRA SAUCES ($1)</p>
          <p>GINGER 8oz ($4)</p>
        </section>
        <section class={SECTION_CLASS}>
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
