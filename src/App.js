import FontSection from "./components/fontSection";
import Footer from "./components/footer";
import Hero from "./components/hero";

function App() {
  return (
    <div className="App">
      <Hero />
      <FontSection
        number="1"
        verse="The Supreme Lord said: My dear friend, mighty-armed Arjuna, listen again to My supreme word, which I shall impart to you for your benefit and which will give you great joy."
        color="#FCA311"
        head="Redressed, cursive"
        headLink="https://fonts.google.com/specimen/Redressed?preview.text_type=custom"
        body="Akaya Telivigala, cursive"
        bodyLink="https://fonts.google.com/specimen/Akaya+Telivigala?preview.text_type=custom"
      />
      <FontSection
        number="2"
        verse="Neither the hosts of demigods nor the great sages know My origin, for, in every respect, I am the source of the demigods and the sages."
        color="#FFECCC"
        head="Roboto, sans-serif"
        headLink="https://fonts.google.com/specimen/Roboto?preview.text_type=custom&preview.text=A%20peep%20at%20some%20distant%20orb%20has%20power%20to%20raise%20and%20purify%20our%20thoughts%20like%20a%20strain%20of%20sacred%20music,%20or%20a%20noble%20picture,%20or%20a%20passage%20from%20the%20grander%20poets.%20It%20always%20does%20one%20good."
        body="Open Sans, sans-serif"
        bodyLink="https://fonts.google.com/specimen/Open+Sans?preview.text_type=custom&preview.text=A%20peep%20at%20some%20distant%20orb%20has%20power%20to%20raise%20and%20purify%20our%20thoughts%20like%20a%20strain%20of%20sacred%20music,%20or%20a%20noble%20picture,%20or%20a%20passage%20from%20the%20grander%20poets.%20It%20always%20does%20one%20good."
      />
      <FontSection
        number="3"
        verse="He who knows Me as the unborn, as the beginningless, as the Supreme Lord of all the worlds-he, undeluded among men, is freed from all sins."
        color="#B8A99A"
        head="Lato, sans-serif"
        headLink="https://fonts.google.com/specimen/Lato?preview.text_type=custom"
        body="Aleo, serif"
        bodyLink="https://fonts.google.com/specimen/Aleo?preview.text_type=custom"
      />
      <FontSection
        number="4-5"
        verse="Intelligence, knowledge, freedom from doubt and delusion, forgiveness, truthfulness, self-control and calmness, pleasure and pain, birth, death, fear, fearlessness, nonviolence, equanimity, satisfaction, austerity, charity, fame and infamy are created by Me alone."
        color="#FF8983"
        head="Unna, serif"
        headLink="https://fonts.google.com/specimen/Unna?preview.text_type=custom"
        body="Alegreya Sans SC, sans-serif"
        bodyLink="https://fonts.google.com/specimen/Alegreya+Sans+SC?preview.text_type=custom"
      />
      <FontSection
        number="6"
        verse="The seven great sages and before them the four other great sages and the Manus [progenitors of mankind] are born out of My mind, and all creatures in these planets descend from them."
        color="#00C0F3"
        head="Butcherman, cursive"
        headLink="https://fonts.google.com/specimen/Butcherman?preview.text_type=custom"
        body="Arbutus, cursive"
        bodyLink="https://fonts.google.com/specimen/Arbutus?preview.text_type=custom"
      />
      <FontSection
        number="7"
        verse="He who knows in truth this glory and power of Mine engages in unalloyed devotional service; of this there is no doubt."
        color="#BC64FF"
        body="Oxygen Mono, monospace"
        head="Oxygen, sans-serif"
        bodyLink="https://fonts.google.com/specimen/Oxygen+Mono?preview.text_type=custom"
        headLink="https://fonts.google.com/specimen/Oxygen?preview.text_type=custom"
      />
      <FontSection
        number="8"
        verse="I am the source of all spiritual and material worlds. Everything emanates from Me. The wise who know this perfectly engage in My devotional service and worship Me with all their hearts."
        color="#DFE0DF"
        head="Germania One, cursive"
        body="Boogaloo, cursive"
        headLink="https://fonts.google.com/specimen/Germania+One?preview.text_type=custom"
        bodyLink="https://fonts.google.com/specimen/Boogaloo?preview.text_type=custom"
      />
      <FontSection
        number="9"
        verse="The thoughts of My pure devotees dwell in Me, their lives are surrendered to Me, and they derive great satisfaction and bliss enlightening one another and conversing about Me."
        color="#DFE6CD"
        head="Tillana, cursive"
        body="Syne Tactile, cursive"
        headLink="https://fonts.google.com/specimen/Tillana?preview.text_type=custom"
        bodyLink="https://fonts.google.com/specimen/Syne+Tactile?preview.text_type=custom"
      />
      <FontSection
        number="10"
        verse="To those who are constantly devoted and worship Me with love, I give the understanding by which they can come to Me."
        color="#FF7B94"
        body="Kavivanar, cursive"
        head="Permanent Marker, cursive"
        bodyLink="https://fonts.google.com/specimen/Kavivanar?preview.text_type=custom"
        headLink="https://fonts.google.com/specimen/Permanent+Marker?preview.text_type=custom"
      />
      <FontSection
        number="11"
        verse="Out of compassion for them, I, dwelling in their hearts, destroy with the shining lamp of knowledge the darkness born of ignorance."
        color="#FFBEF1"
        head="Martel, serif"
        body="Martel Sans, sans-serif"
        headLink="https://fonts.google.com/specimen/Martel?preview.text_type=custom"
        bodyLink="https://fonts.google.com/specimen/Martel+Sans?preview.text_type=custom"
      />
      <Footer />
    </div>
  );
}

export default App;
