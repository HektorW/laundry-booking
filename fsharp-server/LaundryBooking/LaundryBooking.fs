module BaseSample.App

open Suave

[<EntryPoint>]
let main (args : string[]) =
  startWebServer defaultConfig (Suave.Successfull.OK "Hello")
  0
