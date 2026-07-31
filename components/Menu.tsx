import React from "react"

const Menu = () => {
  const MenuSection = ({ children }: { children: React.ReactNode }) => (
    <section className="max-w-screen-lg mx-auto p-8 space-y-4 bg-white">
      {children}
    </section>
  )
  return (
    <>
      <section className="max-w-screen-lg mx-auto px-8 bg-white pt-4">
        <p className="text-base">
          🍣 <span className="text-sm">Raw Fish Ingredients</span>
        </p>
        <p className="text-base">
          🌶️ <span className="text-sm">This Dish is Spicy</span>
        </p>
      </section>
      <MenuSection>
        <h2>Noodles</h2>
        <p className="menu-item">
          <span>TEMPURA UDON or SOBA </span>
          <span className="float-right">12</span>
        </p>
        <p className="menu-item">
          <span>KITSUNE UDON or SOBA </span>
          <span className="float-right">9</span>
        </p>
        <p className="menu-item">
          <span>KAKIAGE UDON or SOBA </span>
          <span className="float-right">10</span>
        </p>
        <p className="menu-item">
          <span>ADD 2pcs INARI </span>
          <span className="float-right">+2</span>
        </p>
        <p className="menu-item">
          <span>extra sauces, etc… </span>
          <span className="float-right">+1</span>
        </p>
      </MenuSection>
      <MenuSection>
        <h2>Combo</h2>
        <p className="text-sm">served with rice and green salad</p>
        <p className="menu-item">
          <span>Match One Set of Main and Sushi/Side</span>
          <span className="float-right">15.5</span>
        </p>
        <div className="float-left">
          <h3>Main</h3>
          <ul className="list-disc pl-5">
            <li>TERIYAKI CHICKEN</li>
            <li>CHICKEN KATSU</li>
            <li>AJI FRY</li>
          </ul>
        </div>
        <div className="float-left">
          <h3 className="sm:pl-5">Side</h3>
          <div className="float-left sm:pl-5">
            <ul className="mb-0 list-disc pl-5">
              <li>California roll (4pcs)</li>
              <li>Spicy crab roll (4pcs)</li>
              <li>🌶️ 🍣 Spicy tuna roll (4pcs)</li>
              <li>Shrimp tempura roll (4pcs)</li>
              <li>🍣 Salmon roll (4pcs)</li>
            </ul>
          </div>
          <div className="float-left sm:pl-5">
            <ul className="list-disc pl-5">
              <li>Cucumber roll (6pcs)</li>
              <li>Egg roll (2pcs)</li>
              <li>Sesame ball (3pcs)</li>
              <li>Inari (2pcs)</li>
            </ul>
          </div>
        </div>
        <div className="clear-both p-4"></div>
        <p className="menu-item">
          <span>
            🍣 HAND ROLL SET (2 hand rolls, 2 egg rolls, salad, miso soup)
          </span>
          <span className="float-right">14</span>
        </p>
        <p className="menu-item">
          <span>🍣 CHIRASHI SUSHI BOWL (served with miso soup)</span>
          <span className="float-right">18</span>
        </p>
        <p className="menu-item">
          <span>🍣 SALMON SUSHI BOWL (served with miso soup)</span>
          <span className="float-right">18</span>
        </p>
        <p className="menu-item">
          <span>
            🍣 SUSHI SAMPLER (cali roll + tuna, salmon &amp; white fish nigiri)
          </span>
          <span className="float-right">13</span>
        </p>
        <p className="menu-item">
          <span>2pcs INARI SUSHI (fried tofu pouch)</span>
          <span className="float-right">3.5</span>
        </p>
        <p className="menu-item">
          <span>5pcs INARI SUSHI (fried tofu pouch)</span>
          <span className="float-right">6.5</span>
        </p>
      </MenuSection>

      <MenuSection>
        <h2>Appetizer</h2>
        <p className="menu-item">
          <span>🌶️ NINJA JALAPENO (4pcs)</span>
          <span className="float-right">9.5</span>
        </p>
        <p className="menu-item">
          <span>EGG ROLL</span>
          <span className="float-right">6</span>
        </p>
        <p className="menu-item">
          <span>SEAWEED SALAD</span>
          <span className="float-right">5.5</span>
        </p>
        <p className="menu-item">
          <span>EDAMAME</span>
          <span className="float-right">4.5</span>
        </p>
        <p className="menu-item">
          <span>TAKOYAKI (5pcs)</span>
          <span className="float-right">7</span>
        </p>
        <p className="menu-item">
          <span>GYOZA (dumpling, 6pcs)</span>
          <span className="float-right">7</span>
        </p>
        <p className="menu-item">
          <span>CUCUMBER SUNOMONO</span>
          <span className="float-right">6</span>
        </p>
        <p className="menu-item">
          <span>CHICKEN BITS</span>
          <span className="float-right">7</span>
        </p>
        <p className="menu-item">
          <span>🍣 POKE APPETIZER (tuna. salmon or mix) </span>
          <span className="float-right">14</span>
        </p>
      </MenuSection>
      <MenuSection>
        <h2>Soup, Rice, Salad</h2>
        <p className="menu-item">
          <span>MISO SOUP</span>
          <span className="float-right">2.5</span>
        </p>
        <p className="menu-item">
          <span>RICE</span>
          <span className="float-right">2.5</span>
        </p>
        <p className="menu-item">
          <span>GREEN SALAD</span>
          <span className="float-right">4.5</span>
        </p>
        <p className="menu-item">
          <span>🍣 SASHIMI SALAD</span>
          <span className="float-right">18</span>
        </p>
      </MenuSection>
      <MenuSection>
        <h2>Bowl</h2>
        <p className="menu-item mb-0">
          <span>TERIYAKI CHICKEN BOWL</span>
          <span className="float-right">8.5</span>
        </p>
        <p className="no-top-margin">
          <span className="float-right">
            <span className="text-sm">
              ADD VEGGIE (broccoli and carrots)
            </span>{" "}
            +1.5
          </span>
          <br />
        </p>
        <div className="clear-both"></div>
        <p className="menu-item">
          <span>KAKIAGE BOWL (2pcs)</span>
          <span className="float-right">8.5</span>
        </p>
        <p className="menu-item">
          <span>TEN DON (1 kakiage, 2 shrimp tempura) </span>
          <span className="float-right">12</span>
        </p>
        <p className="menu-item">
          <span>SAUCE KATSU BOWL (chicken)</span>
          <span className="float-right">11</span>
        </p>
        <p className="menu-item">
          <span>🍣 POKE BOWL (tuna, salmon or mix)</span>
          <span className="float-right">16</span>
        </p>
      </MenuSection>
      <MenuSection>
        <h2>Meal</h2>
        <p className="text-sm">served with rice and green salad</p>
        <p className="menu-item">
          <span>TERIYAKI CHICKEN</span>
          <span className="float-right">12</span>
        </p>
        <p className="menu-item">
          <span>CHICKEN KATSU</span>
          <span className="float-right">12.5</span>
        </p>
        <p className="menu-item">
          <span>AJI FRY (panko breaded deep fry spanish mackerel)</span>
          <span className="float-right">12.5</span>
        </p>
      </MenuSection>
      <MenuSection>
        <h2>Nigiri Sushi (2pcs)</h2>
        <p className="menu-item">
          <span>🍣 ALBACORE</span>
          <span className="float-right">6.5</span>
        </p>
        <p className="menu-item">
          <span>UNAGI (fresh water eel)</span>
          <span className="float-right">6.5</span>
        </p>
        <p className="menu-item">
          <span>🍣 SALMON</span>
          <span className="float-right">6.5</span>
        </p>
        <p className="menu-item">
          <span>SHRIMP</span>
          <span className="float-right">5.5</span>
        </p>
        <p className="menu-item">
          <span>🍣 TUNA</span>
          <span className="float-right">6.5</span>
        </p>
        <p className="menu-item">
          <span>🍣 WHITE FISH</span>
          <span className="float-right">5.5</span>
        </p>
      </MenuSection>
      <MenuSection>
        <h2>Maki Sushi (8pcs)</h2>
        <p className="menu-item">
          <span>🌶️ 🍣 SPICY TUNA or SPICY SALMON</span>
          <span className="float-right">10</span>
        </p>
        <p className="menu-item">
          <span>🍣 TUNA or SALMON</span>
          <span className="float-right">9</span>
        </p>
        <p className="menu-item">
          <span>🌶️🌶️ 🍣 LAVA (spicy imitation crab, jalapeño, spicy tuna or salmon)</span>
          <span className="float-right">12</span>
        </p>
        <p className="menu-item">
          <span>🍣 RAINBOW</span>
          <span className="float-right">14</span>
        </p>
        <p className="menu-item">
          <span>🍣 ATLANTIC (avocado cream cheese on top)</span>
          <span className="float-right">14</span>
        </p>
        <p className="menu-item">
          <span>🍣 POKE (seasoned tuna, avocado, spicy mayo, green onion)</span>
          <span className="float-right">14</span>
        </p>
        <p className="menu-item">
          <span>🍣 PHILADELPHIA (smoke salmon, cream cheese)</span>
          <span className="float-right">11</span>
        </p>
        <p className="menu-item">
          <span>🍣 ALASKA (smoke salmon, avocado)</span>
          <span className="float-right">11</span>
        </p>
        <p className="menu-item">
          <span>🌶️ 🍣 DYNAMITE (spicy crab roll + spicy salmon, scallop, 3 sauces)</span>
          <span className="float-right">14.5</span>
        </p>
        <p className="menu-item">
          <span>🌶️ 🍣 LAS VEGAS (spicy salmon, avocado, cream cheese, deep fry)</span>
          <span className="float-right">15</span>
        </p>
        <p className="menu-item">
          <span>CRUNCHY (shrimp tempura, avacado, eel sauce, spicy mayo, crunchies)</span>
          <span className="float-right">12</span>
        </p>
        <p className="menu-item">
          <span>CALIFORNIA (imitation crab and avacado)</span>
          <span className="float-right">6.5</span>
        </p>
        <p className="menu-item">
          <span>🌶️ SPICY CRAB (spicy imitation crab, cucumber)</span>
          <span className="float-right">6.5</span>
        </p>
        <p className="menu-item">
          <span>DRAGON (shrimp tempura roll + eel avocado eel sauce)</span>
          <span className="float-right">14</span>
        </p>
        <p className="menu-item">
          <span>DOUBLE SHRIMP (shrimp tempura roll + shrimp, avacado, sweet chili sauce)</span>
          <span className="float-right">14</span>
        </p>
        <p className="menu-item">
          <span>SPIDER DELIGHT (fried soft shell crab, cream cheese, avocado, green onion, masago)</span>
          <span className="float-right">14.5</span>
        </p>
        <p className="menu-item">
          <span>SPIDER (5pcs) (fried soft shell crab)</span>
          <span className="float-right">13.5</span>
        </p>
        <p className="menu-item">
          <span>CATERPILLAR (eel avocado, eel sauce)</span>
          <span className="float-right">13</span>
        </p>
        <p className="menu-item">
          <span>KAPPA (6pcs) (cucumber)</span>
          <span className="float-right">4</span>
        </p>
        <p className="menu-item">
          <span>AVOCADO</span>
          <span className="float-right">5.5</span>
        </p>
        <p className="menu-item">
          <span>VEGETABLE (7 veggies)</span>
          <span className="float-right">12</span>
        </p>
      </MenuSection>

      <MenuSection>
        <h2>Sashimi</h2>
        <p className="menu-item">
          <span>🍣 SALMON</span>
          <span className="float-right">15</span>
        </p>
        <p className="menu-item">
          <span>🍣 TUNA</span>
          <span className="float-right">15</span>
        </p>
        <p className="menu-item">
          <span>🍣 ALBACORE</span>
          <span className="float-right">15</span>
        </p>
        <br />
        <p className="menu-item">
          <span>🍣 SASHIMI SAMPLER (tuna, salmon, white fish, 2pcs ea.)</span>
          <span className="float-right">15</span>
        </p>
        <p className="menu-item">
          <span>🍣 SASHIMI MORI (tuna, salmon, white fish, albacore 3pcs ea. Served with rice and miso soup)</span>
          <span className="float-right">25</span>
        </p>
      </MenuSection>
      <MenuSection>
        <h2>Party Platter</h2>
        <p>Call at least 2 hours in advance please</p>
        <p className="menu-item">
          <span>
            MIXED ROLL PLATTER (37pcs)<br />
            (1 shrimp tempura roll, 2 california rolls, 1 spicy crab roll, 5pcs inari)
          </span>
          <span className="float-right">33</span>
        </p>
        <p className="menu-item">
          <span>
            🌶️ 🍣 SPICY SUSHI PLATTER (40 pcs)<br />
            (1 spicy tuna, 1 spicy salmon, 2 spicy crab rolls, 1 lava roll)
          </span>
          <span className="float-right">42</span>
        </p>
        <p className="menu-item">
          <span>
            🍣 ROLL PLATTER (40pc)<br />
            (2 california rolls, 1 shrimp tempura roll, 1 spicy tuna or spicy salmon, 1 rainbow roll)
          </span>
          <span className="float-right">44</span>
        </p>
        <p className="menu-item">
          <span>
            VEGETABLE SUSHI PLATTER (41pcs)<br />
            (1 vegetable roll, 1 avacado roll, 1 avacado + carrots roll, 5pcs inari, 2 cucumber roll)
          </span>
          <span className="float-right">35</span>
        </p>
        <p className="menu-item">
          <span>
            🍣 NIGIRI &amp; ROLL PLATER (39pcs)<br />
            (tuna, salmon, albacore, white fish, shrimp, 3pcs each nigiri, 2 california rolls, 1 spicy tuna or spicy salmon roll)
          </span>
          <span className="float-right">58</span>
        </p>
      </MenuSection>
      <MenuSection>
        <h2>Additional</h2>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
          <li>AVOCADO inside ($1.25)</li>
          <li>AVOCADO on top ($2.50)</li>
          <li>JALAPEÑO (75¢)</li>
          <li>CUCUMBER (75¢)</li>
          <li>MASAGO ($4)</li>
          <li>SOY PAPER ($1.25)</li>
          <li>GREEN ONIONS (75¢)</li>
          <li>CRUNCHYS ($1)</li>
          <li>CREAM CHEESE ($1)</li>
          <li>EXTRA SAUCES ($1)</li>
          <li>GINGER 8oz ($4)</li>
        </ul>
      </MenuSection>
      <MenuSection>
        <p>🍣 Raw Fish Ingredients</p>
        <p>🌶️ This Dish is Spicy</p>
        <p>MOST ITEMS CONTAIN SESAME SEEDS</p>
        <p>INGREDIENTS DEPENDING ON AVAILABILITY</p>
        <p>SUBSTITUTION COST EXTRA</p>
        <p>
          * 🍣 Consumption of raw or undercooked foods can cause food bourne illness 🍣 *
        </p>
      </MenuSection>
    </>
  )
}

export default Menu
