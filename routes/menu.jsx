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
          <p>MOST ITEMS CONTAIN SESAME SEEDS</p>
          <p>INGREDIENTS DEPENDING ON AVAILABILITY</p>
          <p>SUBSTITUTION COST EXTRA</p>
        </section>
        <section class={SECTION_CLASS}>
          <h2>Noodles</h2>
          <p>
            <span>TEMPURA UDON or SOBA</span>
            <span class="float-right">12</span>
          </p>
          <p>
            <span>KITSUNE UDON or SOBA</span>
            <span class="float-right">9</span>
          </p>
          <p>
            <span>KAKIAGE UDON or SOBA</span>
            <span class="float-right">10</span>
          </p>
          <p>
            <span>Add 2pcs Inari</span>
            <span class="float-right">+2</span>
          </p>
          <p>
            <span>EXTRA SAUCES etc.</span>
            <span class="float-right">+1</span>
          </p>
        </section>
        <section class={SECTION_CLASS}>
          <h2>Combo</h2>
          <p class="text-sm">served with rice and green salad</p>
          <p>
            Match One Set of Main and Sushi/Side
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
        <section class={SECTION_CLASS}>
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
        <section class={SECTION_CLASS}>
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
        <section class={SECTION_CLASS}>
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
        <section class={SECTION_CLASS}>
          <h2>Nigiri Sushi (2pcs)</h2>
          <p>
            🍣 ALBACORE<span class="float-right">6.5</span>
          </p>
          <p>
            UNAGI (fresh water eel)<span class="float-right">6.5</span>
          </p>
          <p>
            🍣 SALMON<span class="float-right">6.5</span>
          </p>
          <p>
            SHRIMP<span class="float-right">5.5</span>
          </p>
          <p>
            🍣 TUNA<span class="float-right">6.5</span>
          </p>
          <p>
            🍣 WHITE FISH<span class="float-right">5.5</span>
          </p>
        </section>
        <section class={SECTION_CLASS}>
          <h2>Maki Sushi (8pcs)</h2>
          <p>
            🌶️ 🍣 SPICY TUNA or SPICY SALMON
            <span class="float-right">10</span>
          </p>
          <p>
            🍣 TUNA or SALMON
            <span class="float-right">9</span>
          </p>
          <p>
            🌶️🌶️ 🍣 LAVA (spicy imitation crab, jalapeño, spicy tuna or salmon)
            <span class="float-right">12</span>
          </p>
          <p>
            🍣 RAINBOW
            <span class="float-right">14</span>
          </p>
          <p>
            🍣 ATLANTIC (avocado cream cheese on top)
            <span class="float-right">14</span>
          </p>
          <p>
            🍣 POKE (seasoned tuna, avocado, spicy mayo green onion)
            <span class="float-right">14</span>
          </p>
          <p>
            🍣 PHILADELPHIA (smoke salmon. cream cheese)
            <span class="float-right">11</span>
          </p>
          <p>
            🍣 ALASKA (smoke salmon, avocado)
            <span class="float-right">11</span>
          </p>
          <p>
            🌶️ 🍣 DYNAMITE (spicy crab roll + spicy salmon, scallop, 3 sauces)
            <span class="float-right">14.5</span>
          </p>
          <p>
            🌶️ 🍣 LAS VEGAS (spicy salmon, avocado, cream cheese, deep fry)
            <span class="float-right">15</span>
          </p>
          <p>
            CRUNCHY (shrimp tempura, avacado, eel sauce, spicy mayo, crunchies)
            <span class="float-right">12</span>
          </p>
          <p>
            CALIFORNIA
            <span class="float-right">6.5</span>
          </p>
          <p>
            🌶️ SPICY CRAB (spicy surimi, cucumber)
            <span class="float-right">6.5</span>
          </p>
          <p>
            DRAGON (shrimp tempura roll + eel avocado eel sauce)
            <span class="float-right">14</span>
          </p>
          <p>
            DOUBLE SHRIMP
            <span class="float-right">14</span>
          </p>
          <p>
            SPIDER DELIGHT (fried soft shell crab, cream cheese, avocado, green
            onion, masago)
            <span class="float-right">14.5</span>
          </p>
          <p>
            SPIDER (5pcs) (fried soft shell crab)
            <span class="float-right">13.5</span>
          </p>
          <p>
            CATERPILLAR (eel avocado, eel sauce)
            <span class="float-right">13</span>
          </p>
          <p>
            КАРРА (6pcs) (cucumber)
            <span class="float-right">4</span>
          </p>
          <p>
            AVOCADO
            <span class="float-right">5.5</span>
          </p>
          <p>
            VEGETABLE (7 veggies)
            <span class="float-right">12</span>
          </p>
        </section>

        <section class={SECTION_CLASS}>
          <h2>Sashimi</h2>
          <p>
            🍣 SALMON<span class="float-right">15</span>
          </p>
          <p>
            🍣 TUNA<span class="float-right">15</span>
          </p>
          <p>
            🍣 ALBACORE<span class="float-right">15</span>
          </p>
          <br />
          <p>
            🍣 Sashimi Sampler (tuna, salmon, white fish, 2pcs
            ea.)<span class="float-right">15</span>
          </p>
          <p>
            🍣 Sashimi Mori (tuna, salmon, white fish, albacore 3pcs ea. Served
            with rice and miso soup)<span class="float-right">25</span>
          </p>
        </section>
        <section class={SECTION_CLASS}>
          <h2>Party Platter</h2>
          <p>Call at least 2 hours in advance please</p>
          <p>
            MIXED ROLL PLATTER (37pcs)<br />
            (1 shrimp tempura roll, 2 california rolls, 1 spicy crab roll, 5pcs
            inari)
            <span class="float-right">33</span>
          </p>
          <p>
            🌶️ 🍣 Spicy Sushi Platter (40 pcs)<br />
            (1 spicy tuna, 1 spicy salmon, 2 spicy crab rolls, 1 lava roll)
            <span class="float-right">42</span>
          </p>
          <p>
            🍣 Roll Platter (40pc)<br />
            (2 california rolls, 1 shrimp tempura roll, 1 spicy tuna or spicy
            salmon, 1 rainbow roll)
            <span class="float-right">44</span>
          </p>
          <p>
            VEGETABLE SUSHI PLATTER (41pcs)<br />
            (1 vegetable roll, 1 avacado roll, 1 avacado + carrots roll, 5pcs
            inari, 2 cucumber roll)
            <span class="float-right">35</span>
          </p>
          <p>
            🍣 NIGIRI & ROLL PLATER (39pcs)<br />
            (tuna, salmon, albacore, white fish, shrimp, 3pcs each nigiri{" "}
            <br />2 california rolls, 1 spicy tuna or spicy salmon roll)
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
      </Layout>
    </>
  )
}
